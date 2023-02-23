let color1 = 'grey';
let color2 = color1;
let color3 = color1;
let color4 = color1;
let color5 = color1;
let pitchtf = false;

function setup() {
  soundFormats('mp3');
  metalpipe = loadSound('assets/metalpipe.mp3')
  createCanvas(800, 800);
  background(185);
}

function draw() {
  stroke('black');
  rectMode(CENTER);
  push();
  fill(color1);
  rect(145,350,150,100);
  pop();
  push();
  fill(color2);
  rect(315,350,150,100);
  pop();
  push();
  fill(color3);
  rect(485,350,150,100);
  pop();
  push();
  fill(color4);
  rect(655,350,150,100);
  pop();
  push();
  fill(color5);
  rect(400,450,50,50);
  pop();
}

function mousePressed() {
  if (mouseX >= 70 && mouseX <= 730 && mouseY >= 250 && mouseY <= 350) { //sound play buttons
    if (mouseX <= 220) { //metalpipe
      metalpipe.play();
    } else if (mouseX >= 240 && mouseX <= 390) { //sound 2
      //playsound
    } else if (mouseX >= 410 && mouseX <= 560) { //sound 3
      //playsound
    } else if (mouseX >= 580) { //sound 4
      //playsound
    }
  } else if (mouseX >= 375 && mouseX <= 425 && mouseY >= 425 && mouseY <= 475) { //pitch adjuster
    if (pitchtf) {
      pitchtf = false;
      color5 = 'grey';
    } else {
      pitchtf = true;
      color5 = 'red';
    }
  } else { //bass button
    //playsound
  }
}
