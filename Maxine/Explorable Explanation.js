
//12/16/16 
//Works Consulted: 
//"Making Objects Draggable in P5" code by Cal Crompton
//"Working with Objects using P5.js", John Kuiphoff
//"What's Wrong with Cultural Appropriation?...", Maisha Z. Johnson 


var blocks = [];
var blockSelected = false;
var slideNum=0;
var slideButton; 
var inSquare=0; //counts the blocks in large rect


function setup() {
  createCanvas(800, 800); 
 for(var i = 0; i < 5; i++)
  {
    blocks[i] = new Block(i*30, 200); 
  } 
   slideButton=createButton('click'); 
   slideButton.mousePressed(nextslide);
 }

function draw() {
  background(255); 
   fill(0);
   //initial text
  text("Welcome to my Explorable Explanation about cultural appropriation! Use the button to read more.", 30, 550);
 //directions for slide 1 
 if(slideNum==1){
fill(0); 
text("So what is cultural appropriation?", 30, 30);
 }
 //directions for slide 2 
 else if(slideNum==2){
  fill(0);
  text("Well, many people define it as taking parts of a culture that isn’t yours and using it as a prop or costume.", 30, 30);
 }
 //directions for slide 3 
 else if(slideNum==3){
  fill(0); 
  text("But what’s the difference between appropriation and collaboration?", 30, 30); 
    text ("What’s wrong with mixing things up sometimes?", 30, 50);
 }
 //directions for slide 4 
 else if(slideNum==4){
  fill(0); 
  text("That’s where the definition has to go a little deeper.", 30, 30); 
  text(" Cultural appropriation is about the power dynamic of the groups involved.", 30, 50); 
  text(" Cultural appropriation occurs when the group that’s “borrowing” elements from another culture has oppressed that group historically.", 30, 7);
 }
 //directions for slide 5 
 else if(slideNum==5){
  fill(0); 
  text("Here’s an example of what that might feel like: imagine working really hard on a homework assignment in school.", 30, 30); 
  text(" Just as you’re about to get credit for turning it in, it gets stolen from you and that person who's bullied you since second grade", 30, 50); 
  text("and they get the credit instead.", 30, 70);
 }
 //directions for slide 6 
 else if(slideNum==6){
  fill(0); 
  text("What the heck, right?", 30, 30);
 }
 //directions for slide 7 
 else if(slideNum==7){
  fill(0);
  text("Furthermore, when a group that has been historically oppressed adopts aspects of the dominant culture, that’s not cultural appropriation.", 30, 30)
  text(" Why? Well, this is what is called “assimilation”--and looking at history, it can be essential for marginalized groups to do so in order to survive.", 30, 50);
 }
 //directions for slide 8 
 else if(slideNum==8){
  fill(0); 
  text("Example--Native American students who are suspended for speaking their own language at school.", 30, 30); 
  text(" These students didn’t have a choice about whether or not they wanted to learn English, and that is the difference between appropriation", 30, 50); 
  text("and assimilation.", 30, 70);
 }
 //directions for slide 9 
 else if(slideNum==9){
  fill(0); 
 text("So obviously this is a big issue with many groups and historical conflicts involved.", 30, 30); 
 text(" Let’s get a little more specific and focus on just one area where appropriation happens.", 30, 50);
 }
 //directions for slide 10 
 else if(slideNum==10){
  fill(0);
  text("The music industry!", 30, 30);
 }
 //directions for slide 11 
 else if(slideNum==11){
  fill(0); 
  text("Think of a song as some kind of structure, like a building.", 30, 30);
  text("To better envision this, try building a tower out of these blocks.", 30, 50); 
  text("Stack the blocks in the square to create a building.", 30, 70); 
 }
  //draws blocks in array, displays them and makes them draggable  
  for(var i = 0; i < blocks.length; i++){ //"length" is the number of things in your array
    blocks[i].display(); 
    blocks[i].move(); 
  }

//draws the rectangle into which the blocks are dragged 
  stroke(2); 
  noFill(); 
  rect(300, 100, 400, 400);  
inSquare=0; 
//counts the blocks in the rectangle 
  for(var i=0; i < blocks.length; i++){
  if ((blocks[i].xpos>=300) && (blocks[i].xpos<=700) && (blocks[i].ypos>=100) && (blocks[i].ypos<=500)){
  inSquare += 1;
  }
   }
  //"topples" the tower when there are 5 blocks in the rectangle 
  if(inSquare>=5){
    toppled();
    text("What happened? Well, that particular tower wasn't very structurally sound.", 30, 30); 
text("This is essentially what it means to make a song using cultural appropriation", 30, 50); 
text("The song may sound ok at first, but it has a weak base.", 30, 70);
}
}
//block class, all of the properties of the block can be accessed here 
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
//this function increases the slide number when the button is pressed 
function nextslide(){
  slideNum += 1;
}
//this function runs the toppled tower 
function toppled(){ 
  background(255); 
  rect(300, 100, 400, 400);
  for(var n=0; n<=5; n++){  
fill(0); 
rect(300, 480, 30, 20);
translate(40, 0);
  }
  }
