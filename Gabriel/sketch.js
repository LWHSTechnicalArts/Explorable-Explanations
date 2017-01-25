//12/15/16
//Images by Gabriel Juarez
//Sounds by Gabriel Juarez

var button;
var mouseClickedVar = 0;
var objectType = 0;
var isInWorkRegion;
var charNumber = 0;
var happiness = 0;
var chappiness = 0;
var n = 0;
var sound;
var win;

var ptree;
var pflower;
var prock;
var pcat;
var pwall;

//number of components
var trees = 0;
var rocks = 0;
var flowers = 0;
var walls = 0;
var cats = 0;

//preloading assets
function preload() {
  sound = loadSound ("pop.mp3");
  ptree = loadImage ("assets/tree.png");
  pflower = loadImage ("assets/flower.png");
  prock = loadImage ("assets/rocks.png");
  pwall = loadImage ("assets/wall.png");
  pcat = loadImage ("assets/cat.png");
}

function setup() {
  createCanvas(1001,600); 
  sound.setVolume(1);
  
  //creating the workspace and menu
  strokeWeight(2);
  line(250,0,250,600);
  line(0,600,1000,600);
  line(0,0,1000,0);
  line(1000,0,1000,600)
  strokeWeight(0);
  
  //creating the component buttons
  button = createButton("Tree");
  button.position(20, 60);
  button.mousePressed(function () {
  objectType = 0;});
  
  button = createButton("Rock");
  button.position(20, 90);
  button.mousePressed(function () {
  objectType = 1;});
  
  button = createButton("Flower");
  button.position(20, 120);
  button.mousePressed(function () {
  objectType = 2;});
  
  button = createButton("Wall");
  button.position(20, 150);
  button.mousePressed(function () {
  objectType = 3;});
  
  button = createButton("Cat");
  button.position(20, 180);
  button.mousePressed(function () {
  objectType = 4;});
  
  //creating the character buttons
  button = createButton("Character 1");
  button.position(20, 300);
  button.mousePressed(function () {
  charNumber = 0;});
  
  button = createButton("Character 2");
  button.position(20, 330);
  button.mousePressed(function () {
  charNumber = 1;});
  
  button = createButton("Character 3");
  button.position(20, 360);
  button.mousePressed(function () {
  charNumber = 2;});
  
  button = createButton("Character 4");
  button.position(20, 390);
  button.mousePressed(function () {
  charNumber = 3;});

}
//test whether the user has clicked
function mouseClicked() {
  mouseClickedVar=1;
    }

function draw() {
  //happiness can not be < 0
  if (happiness <= 0) {
  happiness = 0;
  }
  
  //happiness bar
  fill (0);
  rect (20,550,210,10);
  fill (255,0,0);
  fill (255);
  rect (20,510,200,10);
  fill (255-(happiness*15), happiness*15, 0);
  //if happiness < (max happiness) use regular happiness bar format
  if (happiness < 14) {
  rect (20,550,happiness*15,10);
  text(" "+floor(happiness*10)+" ", 20, 520);
  }
  //if happiness >= (max happiness) use this form
  else {
  fill (0,255,0)
  rect (20,550,210,10)
  text("MAX", 20, 520);
  }
  
  //tests whether the player is in the workspace or not
  if (mouseX < 250) {false
    isInWorkRegion = false;
  } else {
    isInWorkRegion = true;
  }
  
  //individual character preferences
  //character 1
  if (charNumber===0) {
    fill(255,85,50);
    ellipse(625,300,50,50);
    happiness = (-0.05*sq(trees)+1.0*trees)+((-0.1*sq(rocks)+3.0*rocks)*0.25);
    
    if (walls>=5 && walls<=10) {
    happiness += -0.1*sq(walls-12)+5
    }
    else if (walls<5) {
    happiness += -0.5*walls
    }
    else {
    happiness += 5
    }
    
    if (cats>=1) {
    happiness += -1.5
    }
    
  }
  //character 2
  if (charNumber==1) {
    fill(255,200,0)
    ellipse(625,300,50,50);
    happiness = ((-1*walls));
    
    if (trees <= 10) {
    happiness += ((-0.1/1.5)*sq(trees-10)+(10/1.5))
    }
    else {
    happiness += 10/1.5
    }
    
    if (flowers <=10) {
    happiness += ((-0.1/3)*sq(flowers-10)+(10/3))
    }
    else {
    happiness += 10/3
    }
    
    if (rocks <=10) {
    happiness += ((-0.1/5)*sq(rocks-10)+(10/5))
    }
    else {
    happiness += 10/5
    }
    
    if (cats >=10) {
      happiness += 5
    }
    else {
    happiness += 0.5*cats;
    }
  }
  //character 3
  if (charNumber==2) {
    fill(0,90,255)
    ellipse(625,300,50,50);
    happiness = (-0.15*sq(cats)+1.5*cats)+(-0.1*sq(flowers)+1.0*flowers)-walls;
    if (trees <= 10) {
    happiness += ((-0.1/1)*sq(trees-10)+(10/1))
    }
    else {
    happiness += 10/1
    }
  }
  //character 4
  if (charNumber==3) {
    fill(0,200,100)
    ellipse(625,300,50,50);
    happiness = 0.05*flowers*trees*(walls-(0.2*trees));
    
    if (flowers >= 5) {
      happiness -= walls
    }
    
    if (walls <= 10) {
    happiness += ((-0.1/1.5)*sq(walls-10)+(10/1.5))
    }
    else {
    happiness += 10/1.5
    }
    
    if (trees <= 10) {
    happiness -= ((-0.1/0.5)*sq(trees-10)+(10/0.5))
    }
    else {
    happiness -= 10/0.5
    }
  }
  

  if (isInWorkRegion === true) { // the user can only add to the workspace if they are in the work region
  if (mouseClickedVar == 1) { //when the user clicks...
  // individual components
      if (objectType === 0) { //if they have selected object 0 (trees)
      fill(255,0,0);
      image(ptree,mouseX-32,mouseY-128,64,128);
      trees += 1;
      sound.play();
      }
      if (objectType == 1) {
      fill(0,255,0);
      image(prock,mouseX-32,mouseY-120,64,128);
      rocks += 1;
      sound.play();
      }
      if (objectType == 2) {
      fill(0,0,255);
      image(pflower,mouseX-32,mouseY-120,64,128);
      flowers += 1;
      sound.play();
      }
      if (objectType == 3) {
      fill(255,255,0);
      image(pwall,mouseX-32,mouseY-112,64,128);
      walls += 1;
      sound.play();
      }
      if (objectType == 4) {
      fill(255,0,255);
      image(pcat,mouseX-16,mouseY-48,32,64);
      cats += 1;
      sound.play();
      }
    mouseClickedVar=0; //after the user clicks, the click test is reset
  }
} else {
  mouseClickedVar=0; //after the user clicks, the click test is reset
}
}