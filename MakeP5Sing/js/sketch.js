let squish = new Tone.Player('assets/squish.mp3');
let loss = new Tone.Player('assets/loss.mp3');
let skitter = new Tone.Player('assets/skitter.mp3');
let vault = new Tone.Player('assets/vaultPhase3.mp3');

class Creature {
  constructor (sprites, x, y, xdir, ydir) {
    this.frameCount = 0;
    this.sprites = sprites;
    this.dx = x;
    this.dy = y;
    this.scale = xdir;
    this.xDir = xdir;
    this.yDir = ydir;
    this.sx = 0;
    this.sy = 0;
    this.sw = 80;
    this.sh = 80;
    this.u = 0;
    this.v = 0;
    this.alive = 1;
    this.walkAnimationLength = 4;
    this.currentWalkFrame = 0;
  }

  walk(xval, yval) {
    if (this.alive) {
      this.u = this.currentWalkFrame % this.walkAnimationLength;
      this.dx += (xval * speed);
      this.dy += (yval * speed);
      //x movement limits
      if (this.dx < (0 + this.sw / 2)) {
        this.dx = 0 + this.sw / 2;
        this.xDir = -1 * this.xDir;
        this.yDir = yDirCalc();
        this.scale = this.xDir;
      } else if (this.dx > (800 - this.sw / 2)) {
        this.dx = 800 - this.sw / 2;
        this.xDir = -1 * this.xDir;
        this.yDir = yDirCalc();
        this.scale = this.xDir;
      }
      //y movement limits
      if (this.dy < (0 + this.sh / 2)) {
        this.dy = 0 + this.sh / 2;
        this.yDir = -1 * this.yDir;
        this.xDir = xDirCalc();
        this.scale = this.xDir;
      } else if (this.dy > (800 - this.sh / 2)) {
        this.dy = 800 - this.sh / 2;
        this.yDir = -1 * this.yDir;
        this.xDir = xDirCalc();
        this.scale = this.xDir;
      }
      //framerate of animation
      if (this.frameCount % 6 == 0) {
        this.currentWalkFrame ++;
      }
    } else {
      this.u = 4;
    }
  }

  display() {
    //start movement
    this.walk(this.xDir, this.yDir);

    //character sprite
    push();
    translate(this.dx, this.dy);
    scale(this.scale, 1);
    image(this.sprites, 0, 0, 80, 80, this.u*this.sw, this.v*this.sh, this.sw, this.sh);
    pop();

    //frame counting
    if (this.frameCount > 60) {
      this.frameCount = 0;
    } else {
      this.frameCount ++;
    }
  }
}

let spritesheetBug;
let bugs;
let score;
let timer;
let speed = 1.5;

function preload() {
  spritesheetBug = loadImage("assets/Bug.png");
}

function setup() {
  createCanvas(800, 800);
  imageMode(CENTER);
  textSize(32);
  squish.toDestination();
  loss.toDestination();
  skitter.toDestination();
  vault.toDestination();
  score = 0;
  timer = 30;
  bugs = [new Creature(spritesheetBug, random(40, 760), random(40, 760), xDirCalc(), yDirCalc()),
          new Creature(spritesheetBug, random(40, 760), random(40, 760), xDirCalc(), yDirCalc()),
          new Creature(spritesheetBug, random(40, 760), random(40, 760), xDirCalc(), yDirCalc()),
          new Creature(spritesheetBug, random(40, 760), random(40, 760), xDirCalc(), yDirCalc()),
          new Creature(spritesheetBug, random(40, 760), random(40, 760), xDirCalc(), yDirCalc()),
          new Creature(spritesheetBug, random(40, 760), random(40, 760), xDirCalc(), yDirCalc()),
          new Creature(spritesheetBug, random(40, 760), random(40, 760), xDirCalc(), yDirCalc()),
          new Creature(spritesheetBug, random(40, 760), random(40, 760), xDirCalc(), yDirCalc()),
          new Creature(spritesheetBug, random(40, 760), random(40, 760), xDirCalc(), yDirCalc()),
          new Creature(spritesheetBug, random(40, 760), random(40, 760), xDirCalc(), yDirCalc())]
}

let playedLoss = 0;
let playedVault = 0;
let playedSkitter = 0;

function draw() {
  background(180);
  for (i in bugs) {bugs[i].display();}
  drawWords("Score: " + score, 20, 80);
  if (round(millis() / 1000) < timer) {
    drawWords("Time left: " + (timer - round(millis() / 1000)), 20, 40);
  } else {
    drawWords("Time left: 0", 20, 40);
    push();
    textSize(75);
    textAlign(CENTER);
    if (score == 10) {
      drawWords("YOU WIN! \nScore: " + score, 400, 400);
    } else {
      drawWords("GAME OVER \nScore: " + score, 400, 400);
      if (!playedLoss) {
        playedLoss = 1;
        playLoss();
        vault.stop();
      }
    }
    pop();
  }
  playVault();
  playSkitter();
}

function playSkitter() {
  if ((timer - round(millis() / 1000)) < 30 && !playedSkitter) {
    playedSkitter = 1;
    skitter.start();
  }
}

function playLoss() {
  loss.start();
}

function playVault() {
  if ((timer - round(millis() / 1000)) < 16 && !playedVault) {
    playedVault = 1;
    vault.start();
  }
}

function drawWords(text1, x, y) {
  fill(0);
  text(text1, x, y);
}

function mousePressed() {
  if (round(millis() / 1000) < timer) {
    for (i in bugs) {
      if (mouseX > bugs[i].dx - bugs[i].sw / 2 &&
          mouseX < bugs[i].dx + bugs[i].sw / 2 &&
          mouseY > bugs[i].dy - bugs[i].sh / 2 &&
          mouseY < bugs[i].dy + bugs[i].sh / 2 &&
          bugs[i].alive) {
        bugs[i].alive = 0;
        bugs[i].xDir = 0;
        bugs[i].yDir = 0;
        squish.start();
        score ++;
        speed *= 2;
      }
    }
  }
}

function xDirCalc() {
  return Math.random() < 0.5 ? -1 : 1;
}

function yDirCalc() {
  var num = Math.random();
  if (num > 0.8) {
    return 1;
  } else if (num < 0.2) {
    return -1;
  } else {
    return 0;
  }
}