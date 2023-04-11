let button1;
let x;
let sw;

function setup() {
  createCanvas(400, 300);

  x = 0;
  sw = false;

  button1 = createButton('LED');
  button1.position(100, 50);
  button1.mousePressed(() => sound1.start());
}

function draw() {
  background(185);
  text('Press the button below to flip the LED on the Arduino on or off.\nUse the joystick x-axis to change the background color of the page.', 0, 20);


}