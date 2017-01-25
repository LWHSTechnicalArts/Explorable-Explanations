
var blocks = [];
var blockSelected = false;
var inSquare = 0; 

function setup() {
  createCanvas(600, 600); 
 for(var i = 0; i < 5; i++)
  {
    blocks[i] = new Block(i*30, 200); 
  } 
  
 // testblock = new Blocks();
 // test2 = new Blocks();
}

function draw() {
  background(255); 
  //draws blocks in array 
  for(var i = 0; i < blocks.length; i++){ //"length" is the number of things in your array
  blocks[i].display(); 
  blocks[i].move(); 
}

stroke(2); 
noFill(); 
rect(300, 100, 400, 400);

if ((this.xpos>300) && (this.xpos<700) && (this.ypos>100) && (this.ypos<500)){
// for(var inSquare=0; inSquare<=4; inSquare++){
// }
inSquare += 1;
}

if(inSquare==5){
  ellipse(20, 30, 40, 50); 
}
   }

function Block(x, y){ 
 this.xpos = x; 
this.ypos = y; 
this.dragablemoving = false; 
  
  //block appearance 
  this.display = function appearance(){ 
    fill(0); 
    rectMode(CORNER); 
    rect(this.xpos, this.ypos, 20, 30); 
  }
  //this makes the block draggable 
 
  this.move = function draggable(){
if(mouseIsPressed && !blockSelected){
   if ((((mouseX >= this.xpos - 20) && (mouseX <= this.xpos + 20) && (mouseY >= this.ypos - 20) && (mouseY <= this.ypos + 20)) || (this.dragablemoving))) 
  {
    this.xpos = mouseX; 
    this.ypos = mouseY; 
    this.dragablemoving = true; 
    blockSelected = true;
  }


  //if the mouse is not pressed, you can't drag the block 
}

  if(mouseIsPressed && blockSelected && this.dragablemoving) {
    this.xpos = mouseX; 
    this.ypos = mouseY; 
  }
if (!mouseIsPressed){ 
  this.dragablemoving = false; 
  blockSelected = false;
  }
}
} 

