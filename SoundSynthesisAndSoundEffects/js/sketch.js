const loop = new Tone.Loop((time) => {
  heloNoise.triggerAttack();
}, "16n");
Tone.Transport.start();

let helo;
let heloNoise;
let playing = false;

function preload() {
  helo = loadImage("assets/helo.jpg");
  
}

function setup() {
  createCanvas(2000, 2000);
  heloNoise = make_heloNoise();
}

function draw() {
  background(185);
  image(helo, 20, 0, 1000, 600, 0, 0, 1300, 900);
}

function mousePressed() {
  Tone.start()
  if (mouseX >= 0 && mouseX <= 1000 && mouseY >= 0 && mouseY <= 600) {
    if (!playing) {
      loop.start(0);
      playing = true;
    } else {
      loop.stop();
      playing = false;
    }
    
  }
}

//------------------------------------------------------------------------
function make_heloNoise() {
  // create synth
  var instrument = new Tone.Synth();
  var synthJSON = {
      "oscillator": {
          "type": "sine"
      },
      "envelope": {
          "attack": 0.001,
          "decay": 0.25,
          "sustain": 0.01,
          "release": 0.2
      }
  };
  
  instrument.set(synthJSON);
  
  var effect1, effect2, effect3;
  
  // create effects
  var effect1 = new Tone.PitchShift();
  effect1JSON = {
    "pitch": -2,
    "windowSize": 0.05,
    "delayTime": 0.1,
    "feedback": 0.1,
      "wet": 0.5
  };
  effect1.set(effect1JSON);
  
  var effect3 = new Tone.FeedbackDelay();
  effect3JSON = {
    "delayTime" : "16n", 
    "feedback" : 0.4,
      "wet": 0.5
  };
  effect3.set(effect3JSON);
  
  
  // make connections
  instrument.connect(effect1);
  effect1.connect(effect3);
  effect3.connect(Tone.Master);
  
   //define deep dispose function
  function deep_dispose() {
      if(effect1 != undefined && effect1 != null) {
          effect1.dispose();
          effect1 = null;
      }
      if(effect2 != undefined && effect2 != null) {
          effect2.dispose();
          effect2 = null;
      }
      if(effect3 != undefined && effect3 != null) {
          effect3.dispose();
          effect3 = null;
      }
      if(instrument != undefined && instrument != null) {
          instrument.dispose();
          instrument = null;
      }
  }
  
  return instrument;
  //return {
      //instrument: instrument,
      //deep_dispose: deep_dispose
  //};
  
}
//------------------------------------------------------------------------