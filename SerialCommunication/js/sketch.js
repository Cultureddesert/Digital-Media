const decoder = new TextDecoder();
let button1;
let button2;
let x = 0;
let sw = false;
let port;
let writer, reader;
let color = 128;

function setup() {
  createCanvas(400, 400);

  if ("serial" in navigator) {
    // The Web Serial API is supported
    button1 = createButton('Connect');
    button1.position(100, 100);
    button1.mousePressed(connect);

    button2 = createButton('LED');
    button2.position(200, 100);
    button2.mousePressed(flip);
  }
}

function draw() {
  background(color);
  text('Press the connect button below to connect to the Arduino.\nPress the LED button below to flip the LED on the Arduino on or off.\nUse the joystick x-axis to change the brightness of the background.', 0, 20);

  if (reader) {
    serialRead();
  }

  if (writer) {
    writer.write(new Uint8Array([ sw ]));
  }
}

async function connect() {
  port = await navigator.serial.requestPort();

  await port.open({ baudRate: 9600 });

  writer = port.writable.getWriter();

  reader = port.readable
    .pipeThrough(new TextDecoderStream())
    .pipeThrough(new TransformStream(new LineBreakTransformer()))
    .getReader();
}

async function serialRead() {
  while(true) {
    const { value, done } = await reader.read();
    if (done) {
      reader.releaseLock();
      break;
    }
    console.log(value);
    color = parseInt(value);
  }
}

function flip() {
  if (sw) {
    sw = false;
  } else if (!sw) {
    sw = true;
  }
}

class LineBreakTransformer {
  constructor() {
    this.chunks = "";
  }

  transform(chunk, controller) {
    this.chunks += chunk;
    const lines = this.chunks.split("\n");
    this.chunks = lines.pop();
    lines.forEach((line) => controller.enqueue(line));
  }

  flush(controller) {
    controller.enqueue(this.chunks);
  }
}