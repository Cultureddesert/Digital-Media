class Character {
  constructor (sprites, x, y) {
    this.frameCount = 0;
    this.sprites = sprites;
    this.dx = x;
    this.dy = y;
    this.xDir = 1;
    this.sx = 0;
    this.sy = 0;
    this.sw = 80;
    this.sh = 80;
    this.u = 0;
    this.v = 0;
    this.walkAnimationLength = 9;
    this.currentWalkFrame = 0;
  }

  walkX(val) {
    this.u = this.currentWalkFrame % this.walkAnimationLength;
    this.dx += (val * 1.5);
    if (this.dx < (0 + this.sw / 2)) {
      this.dx = 0 + this.sw / 2;
    } else if (this.dx > (800 - this.sw / 2)) {
      this.dx = 800 - this.sw / 2;
    }
    if (this.frameCount % 6 == 0) {
      this.currentWalkFrame ++;
    }
  }

  display() {
    //walking
    if (keyIsDown(LEFT_ARROW)) {
      this.xDir = -1;
      this.walkX(this.xDir);
    } else if (keyIsDown(RIGHT_ARROW)) {
      this.xDir = 1;
      this.walkX(this.xDir);
    } else {
      this.u = 0;
      this.currentWalkFrame = 0;
    }

    //character sprite
    push();
    translate(this.dx, this.dy);
    scale(this.xDir, 1);
    image(this.sprites, 0, 0, 80, 80, this.u*this.sw, this.v*this.sh, this.sw, this.sh);
    pop();

    //framerate
    if (this.frameCount > 60) {
      this.frameCount = 0;
    } else {
      this.frameCount ++;
    }
  }
}

let spritesheetGuy;
let spritesheetGirl;
let spritesheetNinja;
let guy;
let girl;
let ninja;

function preload() {
  spritesheetGuy = loadImage("assets/SpelunkyGuy.png");
  spritesheetGirl = loadImage("assets/SpelunkyGirl.png");
  spritesheetNinja = loadImage("assets/SpelunkyNinja.png");
}

function setup() {
  createCanvas(800, 800);
  imageMode(CENTER);
  guy = new Character(spritesheetGuy, random(40, 760), random(40, 760));
  girl = new Character(spritesheetGirl, random(40, 760), random(40, 760));
  ninja = new Character(spritesheetNinja, random(40, 760), random(40, 760));
}

function draw() {
  background(180);
  guy.display();
  girl.display();
  ninja.display();
}