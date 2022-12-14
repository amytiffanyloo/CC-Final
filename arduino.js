//Below are codes that were used in Phase 1 to connect p5js sketch to Arduino. Digital input using button module and analog iinput using pressure sensor module are included. Codes for serial connections refer to code provided by Professor Andrew Cotter during Creative Coding class.

let serial;                             // variable to hold an instance of the serialport library
let portName = '/dev/cu.usbmodem1412301';  // fill in your serial port name here                        // for incoming serial data
let portSelector;
let dataMode;
// let button;
let buttonData;  
let psrData;  
//creating array of words to be randomly generated
let newWords = ["好","嗯","对","行"];
let wordChoice;

function setup() {
  createCanvas(1000, 1000);
  background(200,100,100);
  noStroke(); 
  serial = new p5.SerialPort();       // make a new instance of the serialport library
  serial.on('list', printList);       // set a callback function for the serialport list event
  serial.on('connected', serverConnected); // callback for connecting to the server
  serial.on('open', portOpen);        // callback for the port opening
  serial.on('data', serialEvent);     // callback for when new data arrives
  serial.on('error', serialError);    // callback for errors
  serial.on('close', portClose);      // callback for the port closing
  serial.list();                      // list the serial ports
  serial.openPort(portName);              // open a serial port
}


function draw() {
//variable that stores number chosen to pull from array of words
  wordChoice = floor(random(0,3));
  //if pressure sensor detects pressure within a threshold, generate text from array of words
if(psrData<100){
  write();
}else{
}
//version below was set for digital input of button module
//if(buttonData ==1){
  // write();
// }
}
//function to draw word from array, where wordChoice designates a number randomly generated
//a vp
function write(){
    text(newWords[wordChoice],random(100,500),random(100,500))
  // voice.play();
}

// make a serial port selector object:
function printList(portList) {
  // create a select object:
  portSelector = createSelect();
  portSelector.position(10, 10);
  // portList is an array of serial port names
  for (var i = 0; i < portList.length; i++) {
    // add this port name to the select object:
    portSelector.option(portList[i]);
  }
  // set an event listener for when the port is changed:
  portSelector.changed(mySelectEvent);
}

function mySelectEvent() {
  let item = portSelector.value();
  // if there's a port open, close it:
  // if (serial.serialport != null) {
  //   serial.close();
  // }
  // open the new port:
  serial.openPort(item);
}

function serverConnected() {
  console.log('connected to server.');
}

function portOpen() {
  console.log('the serial port opened.')
}

//stores serial connection data into psrData, which is the data detected from pressure sensor or button
function serialEvent() {
  psrData = serial.readLine();
  console.log(psrData);
  }

function serialError(err) {
  console.log('Something went wrong with the serial port. ' + err);
}

function portClose() {
  console.log('The serial port closed.');
}