function setup() {
  createCanvas(800, 800);
  background(255);
}

function draw() {
  //Example 1
  fill(120, 255, 80, 255);
  noStroke();
  rect(0, 20, 220, 120);
  fill(255, 255, 255, 255);
  stroke(0, 0, 0);
  circle(60, 80, 80);
  rect(120, 40, 80, 80);

  //Example 2
  noStroke();
  rect(295, 17, 130, 130);
  fill(255, 0, 0, 70);
  circle(360, 60, 80);
  fill(0, 255, 0, 70);
  circle(385, 105, 80);
  fill(0, 0, 255, 70);
  circle(335, 105, 80);

  //Example 3
  noStroke();
  fill(0, 0, 0, 255);
  rect(0, 200, 220, 120);
  fill(255, 255, 0, 255);
  circle(60, 260, 80);
  fill(0, 0, 0, 255);
  
  rect(0, 240, 40, 40);
  fill(255, 0, 0, 255);
  circle(160, 260, 80);
  rect(120, 260, 80, 40);
  fill(255, 255, 255, 255);
  circle(140, 260, 25);
  circle(180, 260, 25);
  fill(0, 0, 255, 255);
  circle(140, 260, 15);
  circle(180, 260, 15);
}
