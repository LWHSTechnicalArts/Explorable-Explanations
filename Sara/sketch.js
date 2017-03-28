//decoration things
var heart;
var chemistry;
var brain;
var oxy;
var dopa;
var dopamine;

var dopaminebutton;
var oxytocinbutton;
var words;
var descriptionoxy;
var testdopamine;
var testoxytocin;
var physicald;
var dopaminephysical;
var clickhere;
var texty;
var moretext;

var bothchemicals;
var prarie;
var vole;
var voles;
var result;

var showPulse = false;
var showOxytocinExplanation = false;
var showDopamineExplanation = false;

function preload() {
  brain = loadImage("images/brains.jpg");
  heart = loadImage("images/heart-realistic-art.png");
  oxy = loadImage("images/250px-Oxytocin_with_labels.png");
  dopa = loadImage("images/250px-Dopamine2.svg.png");
  vole = loadImage("images/compassionate-voles.jpg");
}

function setup() {
 
  timer = millis();
  createCanvas(1500, 2000);
  background(255);
  
//scaling the images
push ();
scale(0.75,0.75);
image(brain,18,155);
pop();

push();
scale(0.45,0.45);
image(heart,500,25);
pop();

//Chemistry of Love Text
  chemistry = "The Chemistry of Love";
  fill(201, 25, 22);
  textSize(32);
  textStyle(ITALIC);
  textFont("Helvetica Neue Ultralight");
  text("Chemistry of Love", 300, 65);
  
   strokeWeight(0.1);
  fill(172,220,230);
  clickhere = "Click here to learn about the different chemicals in the brain!";
  text(clickhere, 500,160);
  textSize(10.5);
  
  dopaminebutton = createButton("dopamine");
  dopaminebutton.position(600, 200);
  dopaminebutton.mousePressed(dopamineExplanation);
  
 oxytocinbutton = createButton("oxytocin");
 oxytocinbutton.position(600, 400);
 oxytocinbutton.mousePressed(oxytocinExplanation);
}

function draw() {
  if (showPulse){
  ellipse(300,375,10*sin(millis()/20),10*sin(millis()/20));
}

if (showOxytocinExplanation) {
   descriptionoxy = "Oxytocin is a hormone that can sometimes be called the Cuddling Hormone";
   fill(201, 25, 22);
  strokeWeight(0.1);
  textSize(15);
  image(oxy,700,350);
  textSize(15);
  text(descriptionoxy, 600,600);
  
  testoxytocin = createButton("What does oxytocin do to you?");
  testoxytocin.position(615,650);
  testoxytocin.mousePressed(clickHere);
}

if (showDopamineExplanation) {
  words = "Dopamine is a neurotransmitter that has certain effects on your brain";

  fill(90,159,171);  
  textSize(15);
  text(words,100,600);
  image(dopa,700,200);
  
  physicald = "It is located in the part of the brain that deals with rewards and motivation.";
  textSize(15);
  text(physicald,100,620);
  
  testdopamine = createButton("What does dopamine do to you?");
  testdopamine.position(175,650);
  testdopamine.mousePressed(testDopamine);
}
}
//what happens when the dopamine button is pressed
function dopamineExplanation(){
  showPulse = true;
  showDopamineExplanation = true;
}
//what happens when oxytocin button is pressed
function oxytocinExplanation () {
  showOxytocinExplanation = true;
}
//what happens when question dopamine button is pressed
  function testDopamine () {
  textSize(16);
  dopaminephysical = "It makes you excited and very focused to win rewards. It makes you want to spend a lot of time was this person";
  text(dopaminephysical,100,700,400,400);
  
  textSize(16);
  texty = "The first stages of love is usually powered by this dopamine. It is usually filled with very intense feelings of love and passion";
  text(texty,100,750,400,400);
  
}
//what happens when question oxytocin button is pressed 
function clickHere() {
  fill(201, 25, 22);
  descriptionoxy = "This hormone promotes the feeling of closeness and attachment to another person";
  text(descriptionoxy,600,700,400,400);
  
  moretext = "It is called the Cuddling Hormone because it is released when two people are cuddling or snuggling.";
  text(moretext,600,750,400,400);
  
  textSize(17);
  fill(203,175,237);
  bothchemicals = "For love, these chemicals work for two different aspects. Dopamine is responsible for the beginning stages of the love, for creating the foundation of the realtionship, but it won't last forever. As most people have experienced, deep loves aren't just based on surface level attraction. When the dopamine induced stages of the love have faded away, the oxytocin stage of love is introduced. The oxytocin is present in long-term relationships because of it makes couple feel a deeper connection towards one another.";
  text(bothchemicals, 200, 850, 700,700);
  
  prarie = createButton("Click here to check out an oxytocin experiment with Prarie Voles");
  prarie.position(350,980);
  prarie.mousePressed(prarieVoles);
}

function prarieVoles () {
  push();
  scale(0.9);
  image(vole,50,1120);
  pop();
  
  textSize(17);
  voles = "Prarie voles are very special animals that mate for life. These animals produce the oxytocin hormone a lot, and scientists wanted to see what would happen if these oxytocin receptors were blocked. When they did this, the prarie voles could not find one mate that they wanted to choose to spend the rest of their lives with.";
  text(voles,410,1010,800,70);
  
  result = "Because their oxytocin receptors were blocked, they were not able to create a connection with any other animal that would compel them to choose them as their mate for life, so they moved from vole to vole.";
  text(result,420, 1100, 800,60);
}