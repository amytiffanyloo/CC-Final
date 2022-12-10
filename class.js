    class Breath{
    constructor(){
    this.x = random(100,1200);
    this.y = random(80,650);
    this.size = 0;
    this.r = random(100,200);
    this.g =random(100,200);
    this.b = random(100,200);
    this.alpa = 0;
    }

display(){
    fill(this.r,this.g,this.b,this.alpha);
    ellipse(this.x,this.y,this.size);
}

change(){
  let level = amp.getLevel();
  let ellipseColor = round(map(level, 0, 1, 0, 15000));
    this.alpha = ellipseColor;
     let ellipseSize = round(map(level,0,1,0,2000));
  this.size = random(10,300)*ellipseSize; 
}
}