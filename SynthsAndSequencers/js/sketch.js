let slider1;
let slider2;

const synth1 = new Tone.DuoSynth({
  "harmonicity": 0.8
});

const reverb = new Tone.JCReverb(0.0).toDestination();
synth1.connect(reverb);

let notes = {
  'a': 'C3',
  's': 'D3',
  'd': 'E3',
  'f': 'F3',
  'g': 'G3',
  'h': 'A3',
  'j': 'B3',
  'k': 'C4'
}

function setup() {
  //createCanvas(400, 400);

  slider1 = new Nexus.Slider("#sliderR");
  slider2 = new Nexus.Slider("#sliderH");

  slider1.on('change', (v) => {
    reverb.roomSize.value = v;
  });
  slider2.on('change', (v) => {
    synth1.harmonicity.value = v;
  });

  synth1.toDestination();
}

function draw() {
  //background(185);
}

function keyPressed() {
  let pNote = notes[key];
  synth1.triggerAttackRelease(pNote, "8n");
}