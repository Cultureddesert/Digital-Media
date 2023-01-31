let colorSet = ('black');

function setup() {
  createCanvas(800, 600);
  background(185);
}

function draw() {
  push();
  stroke(255, 255, 255);
  //red
  fill('red');
  rect(0, 0, 50, 50);
  //orange
  fill('orange');
  rect(0, 50, 50, 50);
  //yellow
  fill('yellow');
  rect(0, 100, 50, 50);
  //green
  fill('green');
  rect(0, 150, 50, 50);
  //cyan
  fill('cyan');
  rect(0, 200, 50, 50);
  //blue
  fill('blue');
  rect(0, 250, 50, 50);
  //magenta
  fill('magenta');
  rect(0, 300, 50, 50);
  //brown
  fill('brown');
  rect(0, 350, 50, 50);
  //white
  fill('white');
  rect(0, 400, 50, 50);
  //black
  fill('black');
  rect(0, 450, 50, 50);
  pop();
}

function mousePressed() {
  if (mouseX >= 0 && mouseX <= 50 &&
      mouseY >= 0 && mouseY <= 500) {
        if (mouseY <= 50) {colorSet = ('red')}
        else if (mouseY > 50 && mouseY <= 100) {colorSet = ('orange')}
        else if (mouseY > 100 && mouseY <= 150) {colorSet = ('yellow')}
        else if (mouseY > 150 && mouseY <= 200) {colorSet = ('green')}
        else if (mouseY > 200 && mouseY <= 250) {colorSet = ('cyan')}
        else if (mouseY > 250 && mouseY <= 300) {colorSet = ('blue')}
        else if (mouseY > 300 && mouseY <= 350) {colorSet = ('magenta')}
        else if (mouseY > 350 && mouseY <= 400) {colorSet = ('brown')}
        else if (mouseY > 400 && mouseY <= 450) {colorSet = ('white')}
        else if (mouseY > 450 && mouseY <= 500) {colorSet = ('black')}
      }
}

function mouseDragged() {
  push();
  stroke(colorSet);
  strokeWeight(10);
  line(mouseX, mouseY, pmouseX, pmouseY);
  pop();
}
