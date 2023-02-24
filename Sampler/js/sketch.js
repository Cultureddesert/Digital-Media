let sound1 = new Tone.Player('sounds/metalpipe.mp3');
let sound2 = new Tone.Player('sounds/omg.mp3');
let sound3 = new Tone.Player('sounds/huh.mp3');
let sound4 = new Tone.Player('sounds/horn.mp3');

let button1, button2, button3, button4, button5;
let pSlider;

const pitchShift = new Tone.PitchShift();

function setup() {
  createCanvas(400, 300);

  sound1.connect(pitchShift);
  sound2.connect(pitchShift);
  sound3.connect(pitchShift);
  sound4.connect(pitchShift);
  pitchShift.toDestination();

  button1 = createButton('PIPE');
  button1.position(100, 50);
  button1.mousePressed(() => sound1.start());

  button2 = createButton('OMG');
  button2.position(200, 50);
  button2.mousePressed(() => sound2.start());

  button3 = createButton('HUH');
  button3.position(100, 150);
  button3.mousePressed(() => sound3.start());

  button4 = createButton('HORN');
  button4.position(200, 150);
  button4.mousePressed(() => sound4.start());

  pSlider = createSlider(-10, 10, 0, 1);
  pSlider.mouseReleased(() => {pitchShift.pitch = pSlider.value();})
}

function draw() {
  background(185);
  text('Press the buttons below for sounds, and move the slider to shift their pitch', 0, 20);
}