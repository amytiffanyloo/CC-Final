let mic;
let input1, button,chants, chant
let song;

function setup() {
  createCanvas(1200,1000);
  background(255)
  // Create an Audio input
  mic = new p5.AudioIn();
  mic.start();
  //create an input
  input1 = createInput();
  input1.position(100, 80);
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
  let chant = input1.value();
  message.html('chant away!');
  input1.value('');
  chants = chant;
  background(255)
}

function draw() {
  let vol = mic.getLevel();
  let h = map(vol, 0, 1, 0,100);
  fill(random(100,200),random(100,200),random(100,200),random(100,200));
  if(h>10){
    push();
    textSize(random(30,150))
text(chants,random(0,1200),random(50,1000));
pop();
  }else {
    return;
  }
}