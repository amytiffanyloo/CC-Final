let mic,amp;
let song1, song2, song3;
let songs = []
let breaths =[]

function preload(){
  soundFormats('mp3')
  song1 = loadSound('song1.mp3');
//   song2 = loadSound('song2.mp3');
//   song3 = loadSound('song2.mp3');
  console.log("song all loaded");
}

function setup() {
  createCanvas(1000, 1000);
  background(255);
  frameRate(5);
//   songs =[song1, song2, song3]
  amp = new p5.Amplitude();
  amp.setInput(song1);
//   for (i=0; i<5;i++){
//     breaths[i] = new Breath(100,200,200);
// }
}

// class Breath{
//     constructor(r,g,b){
//     this.x = random(width);
//     this.y = random(height);
//     this.size = random(100,400);
//     this.r = r;
//     this.g = g;
//     this.b = b;
//     }

// display(){
//     fill(this.r,this.b,this.g);
//     ellipse(this.x,this.y,this.size);
// }

// change(){
//     this.r = ellipseColor*0.5
//     this.b = ellipseColor*0.5
// }

// }

function mousePressed(){
  if (song1.isPlaying()) {
    // .isPlaying() returns a boolean
    song1.stop();
  } else {
    song1.play(0,1,0.5,1,300);
  }
}

function art(){
 let level = amp.getLevel();
  let ellipseColor = map(level, 0, 1, 0, 15000);
  let ellipseSize = map(level,0,1,0,20000)
  text(ellipseColor,100,400);
  noStroke()
  push();
  fill(ellipseColor*0.5,ellipseColor,ellipseColor*0.5,ellipseColor*0.5)
  ellipse(200,200,ellipseSize*0.5)
  fill(200,ellipseColor*0.5,ellipseColor*0.5,ellipseColor*0.5)
  ellipse(280,200,ellipseSize*0.3)
  pop();
  console.log(ellipseColor)    
}

function draw() {
    background(255);
    text("Click anywhere to begin your meditation session",100,200);
    art();
    //   console.log("this is song duration:" + song1.duration());
    //   for (i=0;i<breaths.length;i++){
    //     breaths[i].display();
    //     breaths[i].change();
    //   }
    }
