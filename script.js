let serial;                             // variable to hold an instance of the serialport library
let portName = '/dev/cu.usbmodem1412301';  // fill in your serial port name here                        // for incoming serial data
let portSelector;
let dataMode;
let button;
let buttonData;  
let fsrData;  
let newWords = ["好","嗯","对","行"];
let wordChoice;
let mic;
let input1
let prayerNum =0;
let chants=[];
let chantInput;
let song1;

function preload(){
  soundFormats('mp3')
  song1 = loadSound('song1.mp3');
  console.log("test");
}

function setup() {
  createCanvas(1000, 1000);
   background(200,100,100);
  mic = new p5.AudioIn();
  mic.start();
  input1 = createInput();
  input1.position(50, 50);
 button = createButton('start');
  button.position(150,150, 10);
  button.mousePressed(chanting);
  message = createElement('h2', 'what do you want to chant?');
  message.position(100,100);
  textAlign(CENTER);
  textSize(30);

  // noStroke(); 
  // serial = new p5.SerialPort();       // make a new instance of the serialport library
  // serial.on('list', printList);       // set a callback function for the serialport list event
  // serial.on('connected', serverConnected); // callback for connecting to the server
  // serial.on('open', portOpen);        // callback for the port opening
  // serial.on('data', serialEvent);     // callback for when new data arrives
  // serial.on('error', serialError);    // callback for errors
  // serial.on('close', portClose);      // callback for the port closing
  // serial.list();                      // list the serial ports
  // serial.openPort(portName);              // open a serial port


}

// function canvasPressed(){
//   song1.play();
// }


function mousePressed() {
  if (song1.isPlaying()) {
    // .isPlaying() returns a boolean
    song1.stop();
  } else {
    song1.play();
  }
}

function chanting(){
  background(200,100,100)
  // Create an Audio input

  chantInput = input1.value();
  message.html('chant away!');
  input1.value('');
  // song.stop();
  // mantra.play();

}

class Words {
  constructor (prayer, x, y){
    this.prayer = prayer;
    this.x =x; 
    this.y =y;
  }
  display () {
    text(this.prayer, this.x, this.y);
  }
}

function draw() {
  // ellipse(100,100,200);
  let vol = mic.getLevel();
  let h = map(vol, 0, 1, 0,100);
  console.log(prayerNum)
  fill(0);
  if(h>30){
    prayerNum ++;
    for (i=0;i<prayerNum;i++){
      chants[i] = new Words (chantInput, random(0,windowWidth),random(0,windowHeight))
      chants[i].display();
    }
  }else return;

    // fill(100,200,200*0.5*vol)
    // ellipse(100,100,200*0,5*vol)
//   wordChoice = floor(random(0,3));
// if(fsrData<100){
//   write();
// }else{
  
// }
  }
 
// function write(){
//     text(newWords[wordChoice],random(100,500),random(100,500))
//   // voice.play();
// }


// // make a serial port selector object:
// function printList(portList) {
//   // create a select object:
//   portSelector = createSelect();
//   portSelector.position(10, 10);
//   // portList is an array of serial port names
//   for (var i = 0; i < portList.length; i++) {
//     // add this port name to the select object:
//     portSelector.option(portList[i]);
//   }
//   // set an event listener for when the port is changed:
//   portSelector.changed(mySelectEvent);
// }

// function mySelectEvent() {
//   let item = portSelector.value();
//   // if there's a port open, close it:
//   // if (serial.serialport != null) {
//   //   serial.close();
//   // }
//   // open the new port:
//   serial.openPort(item);
// }

// function serverConnected() {
//   console.log('connected to server.');
// }

// function portOpen() {
//   console.log('the serial port opened.')
// }

// function serialEvent() {
//   fsrData = serial.readLine();
//   console.log(fsrData);
//   }

// function serialError(err) {
//   console.log('Something went wrong with the serial port. ' + err);
// }

// function portClose() {
//   console.log('The serial port closed.');
// }