let mic,amp;
// let songs = [];
let song;
let breaths1 =[];
let breaths2 =[];
let mode = 255;
// let songChoice;

function preload(){
  soundFormats('mp3')
  song = loadSound('song1.mp3');
//   songs[0] = loadSound('song1.mp3');
//   songs[1] = loadSound('song2.mp3');
//   songs[2] = loadSound('song3.mp3');
    // songChoice = floor(random(0,3));
    // song = songs[songChoice];
  console.log("song all loaded");
  console.log(song);
}

function ampSet(){
  amp = new p5.Amplitude();
  amp.toggleNormalize(true);
  amp.setInput();
}

function setup() {
  createCanvas(1200, 1000);
  background(255);
  ampSet();
  frameRate(3);
    noStroke();
  for (i=0; i<4;i++){
    breaths1[i] = new Breath(random(100,300));
}
  for (i=0; i<3;i++){
    breaths2[i] = new Breath(random(100,300));

}}

function mousePressed(){
  if (song.isPlaying()) {
    // .isPlaying() returns a boolean
    song.stop();
  } else {
    song.play(0,1,0.5,1,600);
  }
}

function draw() {
    background(255);
    if(song.isPlaying()){
        for (i=0;i<breaths1.length;i++){
        breaths1[i].display();
        breaths1[i].change();
      }

    }
if(song.isPlaying()){
       for (i=0;i<breaths2.length;i++){
        breaths2[i].display();
        breaths2[i].change();
      }
}
     
let level = amp.getLevel();
  let ellipseColor = round(map(level, 0, 1, 0, 15000));
  let ellipseSize = round(map(level,0,1,0,20000));
  push();
    fill(mode,mode,mode,mode);
  text("Ellipse Size: " + ellipseSize,5,10);
  text("Ellipse Color: " + ellipseColor,5,20);
  text("Amplitude:"+level,5,30)
  pop();
    }

//Turning on debug mode by changing alpha of text color
function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    mode = 0;
  } else if (keyCode === RIGHT_ARROW) {
    mode = 255;
  }
}
