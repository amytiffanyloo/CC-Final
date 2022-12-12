let mic;
let input1, button,chants, chant
let song;

function setup() {
  createCanvas(1200,1000);
  background(255)
  //set up audio input from microphone 
  mic = new p5.AudioIn();
  mic.start();
  //used input and button functions from p5js instead of JS, referred to p5js documentation at: https://p5js.org/examples/dom-input-and-button.html
  //create an input bar used to store chanting words
  input1 = createInput();
  input1.position(100, 80);
  //create a button to trigger chanting function 
  button = createButton('start');
  button.position(input1.x+190,input1.y-15);
  button.mousePressed(chanting);
  message = createElement('h2', 'What do you want to chant?');
  message.position(90,10);
  textAlign(CENTER);
  textSize(30);
  textFont('Neucha');
}

function chanting() {
  //defining inputted values as variable
  let chant = input1.value();
  message.html('chant away!');
  input1.value('');
  //storing chant as string variable
  chants = chant;
  //background refreshes everytime button is pressed
  background(255)
}

//referred to p5js AudioIn documentation at https://p5js.org/reference/#/p5.AudioIn
function draw() {
  //continuous input of volume from microphone, stored in vol variable
  let vol = mic.getLevel();
  //mapping volume to range of number indicating volume levels 0 to 100
  let h = map(vol, 0, 1, 0,100);
  fill(random(100,200),random(100,200),random(100,200),random(100,200));
  //if volume level reaches above 10, then inputed words will be sketched on screen
  if(h>10){
    push();
    textSize(random(30,150))
text(chants,random(0,1200),random(50,1000));
pop();
  }else {
    return;
  }
}