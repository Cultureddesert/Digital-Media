function setup() {
  createCanvas(800, 800);
  background(255);
}

function draw() {
  //Example 1
  push();
  fill(120, 255, 80, 255);
  noStroke();
  rect(0, 20, 220, 120);
  fill(255, 255, 255, 255);
  stroke(0, 0, 0);
  circle(60, 80, 80);
  rect(120, 40, 80, 80);
  pop();

  //Example 2
  push();
  noStroke();
  fill(255, 255, 255, 255);
  rect(295, 17, 130, 130);
  fill(255, 0, 0, 70);
  circle(360, 60, 80);
  fill(0, 255, 0, 70);
  circle(385, 105, 80);
  fill(0, 0, 255, 70);
  circle(335, 105, 80);
  pop();

  //Example 3
  push();
  noStroke();
  fill(0, 0, 0, 255);
  rect(0, 200, 220, 120);
  fill(255, 255, 0, 255);
  circle(60, 260, 80);
  fill(0, 0, 0, 255);
  triangle(0, 200, 0, 320, 60, 260);
  fill(255, 0, 0, 255);
  circle(160, 260, 80);
  rect(120, 260, 80, 40);
  fill(255, 255, 255, 255);
  circle(140, 260, 25);
  circle(180, 260, 25);
  fill(0, 0, 255, 255);
  circle(140, 260, 15);
  circle(180, 260, 15);
  pop();

  //Example 4
  push();
  noStroke();
  fill(0, 0, 155, 255);
  rect(300, 200, 120, 120);
  stroke(255, 255, 255);
  fill(0, 155, 0, 255);
  circle(360, 260, 60);
  fill(255, 0, 0, 255);
  translate(360, 260);
  rotate(60);
  star(0, 0, 11, 30, 5);
  pop();
}

function star(x, y, rad1, rad2, points) {
  let angle = TWO_PI / points;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * rad2;
    let sy = y + sin(a) * rad2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * rad1;
    sy = y + sin(a + halfAngle) * rad1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
