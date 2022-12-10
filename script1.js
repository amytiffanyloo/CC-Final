let mic,amp;
let song1, song2, song3;
let song;
let songs = [];
let breaths1 =[];
let breaths2 =[];
let mode = 255;
let songChoice;

function preload(){
  soundFormats('mp3')
  songs[0] = loadSound('song1.mp3');
  songs[1] = loadSound('song2.mp3');
  song[2] = loadSound('song2.mp3');
  console.log("song all loaded");
}

function setup() {
  createCanvas(1200, 1000);
  background(255);
  songChoice = floor(random(0,3));
  song = songs[songChoice];
  frameRate(3);
    noStroke()
  amp = new p5.Amplitude();
  amp.setInput(song);
  for (i=0; i<4;i++){
    breaths1[i] = new Breath(random(100,300));
}
  for (i=0; i<3;i++){
    breaths2[i] = new Breath(random(100,300));
}
}

function mousePressed(){
  if (song.isPlaying()) {
    // .isPlaying() returns a boolean
    song.stop();
  } else {
    song.play(0,1,0.5,1,300);
  }
}

function draw() {
    background(255);
      for (i=0;i<breaths1.length;i++){
        breaths1[i].display();
        breaths1[i].change();
      }
        for (i=0;i<breaths2.length;i++){
        breaths2[i].display();
        breaths2[i].change();
      }
          let level = amp.getLevel();
  let ellipseColor = round(map(level, 0, 1, 0, 15000));
  let ellipseSize = round(map(level,0,1,0,20000));
  push();
    fill(mode);
  text("Ellipse Size: " + ellipseSize,5,10);
  text("Ellipse Color: " + ellipseColor,5,20);
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
