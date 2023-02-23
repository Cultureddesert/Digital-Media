function setup() {
  createCanvas(800, 800);
  background(185);
}

function draw() {
  stroke('black');
  fill('grey');
  rectMode(CENTER);
  rect(145,350,150,100);
  rect(315,350,150,100);
  rect(485,350,150,100);
  rect(655,350,150,100);
  rect(400,450,50,50);
}

function mousePressed() {
  if (mouseX >= 70 && mouseX <= 730 && mouseY >= 250 && mouseY <= 350) { //sound play buttons
    if (mouseX <= 220) { //sound 1

    } else if (mouseX >= 240 && mouseX <= 390) { //sound 2

    } else if (mouseX >= 410 && mouseX <= 560) { //sound 3

    } else if (mouseX >= 580) { //sound 4

    }
  } else if (mouseX >= 375 && mouseX <= 425 && mouseY >= 425 && mouseY <= 475) { //pitch adjuster

  } else { //bass surge

  }
}
