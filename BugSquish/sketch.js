class Creature {
  constructor (sprites, x, y, xdir, ydir) {
    this.frameCount = 0;
    this.sprites = sprites;
    this.dx = x;
    this.dy = y;
    this.xDir = xdir;
    this.yDir = ydir;
    this.sx = 0;
    this.sy = 0;
    this.sw = 80;
    this.sh = 80;
    this.u = 0;
    this.v = 0;
    this.walkAnimationLength = 9;
    this.currentWalkFrame = 0;
  }

  walk(xval, yval) {
    this.u = this.currentWalkFrame % this.walkAnimationLength;
    this.dx += (xval * 1.5);
    this.dy += (yval * 1.5);
    //x movement limits
    if (this.dx < (0 + this.sw / 2)) {
      this.dx = 0 + this.sw / 2;
      this.xDir = -1 * this.xDir;
    } else if (this.dx > (800 - this.sw / 2)) {
      this.dx = 800 - this.sw / 2;
      this.xDir = -1 * this.xDir;
    }
    //y movement limits
    if (this.dy < (0 + this.sh / 2)) {
      this.dy = 0 + this.sh / 2;
      this.yDir = -1 * this.yDir;
    } else if (this.dy > (800 - this.sh / 2)) {
      this.dy = 800 - this.sh / 2;
      this.yDir = -1 * this.yDir;
    }
    //framerate of animation
    if (this.frameCount % 6 == 0) {
      this.currentWalkFrame ++;
    }
  }

  display() {
    //start movement
    this.walk(this.xDir, this.yDir);

    //character sprite
    push();
    translate(this.dx, this.dy);
    scale(this.xDir, 1);
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

function preload() {
  spritesheetBug = loadImage("assets/Bug.png");
}

function setup() {
  createCanvas(800, 800);
  imageMode(CENTER);
  score = 0;
  timer = 30;
  bugs = [new Creature(spritesheetBug, random(40, 760), random(40, 760), xDirCalc(), yDirCalc()),
          new Creature(spritesheetBug, random(40, 760), random(40, 760), xDirCalc(), yDirCalc()),
          new Creature(spritesheetBug, random(40, 760), random(40, 760), xDirCalc(), yDirCalc()),
          new Creature(spritesheetBug, random(40, 760), random(40, 760), xDirCalc(), yDirCalc()),
          new Creature(spritesheetBug, random(40, 760), random(40, 760), xDirCalc(), yDirCalc())]
}

function draw() {
  background(180);
  bugs.display();
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