//map image
var img;
//table variable
var table;
//Demographic check boxes
var AAcheck; 
var LAcheck; 
var Wcheck;
var MEcheck; 
var WOcheck;
//description of the checkboxes:
var description;
//variables for each demographic
var black;
var latino;
var white;
var women;
var men;
// variable for a checking button later on. 
var checkButton;
//Clinton's Original vote counts in each state
var ClintonVotes;
//Votes added (or subtracted) based on Obama's selected demographic
var demographic;
//Trump's vote count in the state
var trump;
//Variable for whether Clinton wins the state (Yes or No)
var yesno; 
//variables for future paragraphs. 
var clintonVoteParagraph; 
var modifiedVoteParagraph;
var trumpVoteParagraph;
var demographicParagraph;
var clintonWinParagraph;

function preload()
{
  //Preload the Image
  img = loadImage("vV6Kb.png");
  //Preload the Table
  //I learned how to load the table from a processing tutorial: https://processing.org/reference/loadTable_.html
  table = loadTable("Election Data Final Test.csv", "csv", "header");
  //The data taken in the table is drawn from two places: 
  //2016-CNN: http://www.cnn.com/election/results/exit-polls/national/president
  //2012-NBC News: http://elections.nbcnews.com/ns/politics/2012/all/president/#.WFMd96IrJE6
  
}

function setup() {
  var canvas = createCanvas(1200,1000);
  
  //lay down the image of the map around the middle of the page, to the right scale
  push();
  scale(0.60,0.65);
  image(img, 0, 0, 1200, 700); 
  pop(); 
  
  //create blank paragraphs (for the description of the checkboxes), to be filled later with the description I need based on the state; this is included so that instead of rewriting the whole paragraphs over eachother when the state changes, it will just change the text within these quotes. 
  //Source of Idea: Ms. Freed
  description = createP("");
  clintonVoteParagraph = createP(""); 
  modifiedVoteParagraph = createP(""); 
  trumpVoteParagraph = createP(""); 
  demographicParagraph = createP(""); 
  clintonWinParagraph = createP(""); 
  
  //make the rectangles for the buttons
  fill(0);
  //Iowa
  rect(365, 180, 12, 12);
  
  //Michigan
  rect(474, 173, 12, 12);
  
  //Wisconsin
  rect(420, 164, 12, 12);
  
  //Ohio
  rect(491, 200, 12, 12);
  
  //Pennsylvania 
  rect(545, 180, 12, 12);
  
  //Florida
  rect(555, 395, 12, 12);  
  //These buttons  bring up a paragraph describing potential things to examine. 
  
  //set the number of votes for each demographic equal to an initial 0. 
  black = 0;
  latino = 0;
  white = 0;  
  women = 0;
  men = 0;
}

//make the "clicking" part of the buttons, by giving different functions when the mouse is pressed over each button
//Technique was presented by Ms. Freed
function mousePressed() {
  
  //Iowa Button
  if (mouseX>365 && mouseX<365+12 && mouseY> 180 && mouseY<180+12) {
  iaData() 
  }
  //Michigan Button
  if (mouseX>474 && mouseX<474+12 && mouseY> 173 && mouseY<173+12) {
  miData()
  }
  //Wisconsin Button
  if (mouseX>420 && mouseX<420+12 && mouseY> 164 && mouseY<164+12) {
  wiData()
  }
  //Ohio Button
  if (mouseX>491 && mouseX<491+12 && mouseY> 200 && mouseY<200+12) {
  ohData()
  }
  //Pennsylvania Button
  if (mouseX>545 && mouseX<545+12 && mouseY> 180 && mouseY<180+12) {
  paData()
  }
  //Florida Button
  if (mouseX>555 && mouseX<555+12 && mouseY> 395 && mouseY<395+12) {
  flData()
  }

}

function draw() {
}

//function that creates the demographic checkboxes, and the "check" button. 
function buttoncheck() {

  //check boxes description, changing the empty html text declared in the set-up to the actual description that I need (with the declared state)
  description.html("Check demographics below to see whether Clinton would have won  " + state+ ", with the success Obama had in your chosen demographics (in 2012):");
  description.position(0,697+175);
  
  //make the button so that they can "check" the results with their selected demographics
  checkButton = createButton('Check');
  checkButton.position(100, 900+75);
  checkButton.mousePressed(Check);
  
  //make the check boxes, locate them properly, and lead them to their functions that change the number of votes in the demographic
  //Checkboxes learned from p5 reference "createCheckbox()" example: https://p5js.org/reference/#/p5/createCheckbox
  AAcheck = createCheckbox('Blacks', false);
  AAcheck.position(0, 850+75);
  AAcheck.changed(changeAA);
  LAcheck = createCheckbox('Latinos', false);
  LAcheck.position(0, 876+75);
  LAcheck.changed(changeLA);
  Wcheck = createCheckbox('Whites', false);
  Wcheck.position(0, 900+75);
  Wcheck.changed(changeW);
  WOcheck = createCheckbox('Women', false);
  WOcheck.position(0, 925+75);
  WOcheck.changed(changeWO);
  MEcheck = createCheckbox('Men', false);
  MEcheck.position(0, 950+75);
  MEcheck.changed(changeM);
}

//the functions for each state.
function miData () {
  //set the row that is being looked at, to the row Michigan has on the table
  tabrow = 0; 
  //set the state name
  state = "Michigan"; 
  fill(255);
  rect(0, 697+175, windowWidth, 950+75);
  //set up all the buttons/checkboxes that are being looked at
  buttoncheck();

  //Original votes
  ClintonVotes = 2268839;
  trump= 2279543
}

function iaData () {
  //set the row that is being looked at, to the row Iowa has on the table
  tabrow = 3; 
  //set the state name
  state = "Iowa"; 
  //set up all the buttons/checkboxes that are being looked at
  buttoncheck();

  //Original votes
  ClintonVotes = 653669;
  trump= 800983;
}
function wiData() {
  //set the row that is being looked at, to the row Wisconsin has on the table
  tabrow = 1; 
  //set the state name
  state = "Wisconsin"; 
  //set up all the buttons/checkboxes that are being looked at
  buttoncheck()

  //Original votes
  ClintonVotes = 1381823;
  trump= 1404000;
}
function ohData() {
  //set the row that is being looked at, to the row Ohio has on the table
  tabrow = 4; 
  //set the state name
  state = "Ohio"; 
  //set up all the buttons/checkboxes that are being looked at
  buttoncheck()

  //Original votes
  ClintonVotes = 2394164;
  trump= 	2841005;
}
function paData() {
  //set the row that is being looked at, to the row Penn. has on the table
  tabrow = 5; 
  //set the state name
  state = "Pennsylvania"; 
  //set up all the buttons/checkboxes that are being looked at
  buttoncheck()

  //Original votes
  ClintonVotes = 2926458;
  trump= 	2970770;
} 
function flData() {
  //set the row that is being looked at, to the row Florida has on the table
  tabrow = 2; 
  //set the state name
  state = "Florida"; 
  //set up all the buttons/checkboxes that are being looked at
  buttoncheck()

  //Original votes
  ClintonVotes = 4504975;
  trump= 	4617886;
}  



//figure out whether Clinton Wins 
function ClintonWin () {
    if ((ClintonVotes-demographic)>(trump)) {
      yesno= "Yes, she wins by "
  }
    else {
      yesno = "No, she loses by "
    }
  }
  
//make all of the functions so that if a checkbox is selected, Obama's additional votes in that demographic (or less votes) is set equal to the difference between 
//Obama and Clinton on the table. If the button is not selected, there are no additional votes in the demographic added (demographic set to 0)
function changeAA() {
  if (this.checked()) {
    //I learned how to use the table.getNum function from a processing tutorial by Daniel Shiffman: https://www.processing.org/tutorials/data/
    black= table.getNum(tabrow, 9);
  }
  else {
    black = 0;
  }
}
function changeLA() {
  if (this.checked()) {
    latino = table.getNum(tabrow,19);
  } 
  else {
    latino = 0;
  }
}
function changeW(){
  if (this.checked()) {
    white = table.getNum(tabrow, 30)
  }
  else {
    white = 0;
  }
}

function changeWO() {
  if (this.checked()) {
    women = table.getNum(tabrow, 41)
  }
  else {
    women = 0;
  }
}

function changeM() {
  if (this.checked()) {
    men = table.getNum(tabrow, 52)
  }
  else {
    men = 0;
  }
}
//function for when they click "check"
function Check() {
//find the additional or less votes Obama gets with the selected demographics 
  demographic= black + latino + white + women + men;
//run a function to see if Clinton wins
  ClintonWin();
//paragraphs/explanation of the data (they are pretty self-explanatory), using the same .html technique that Ms. Freed recommended, mentioned before. 
  clintonVoteParagraph.html("Clinton's Number of votes: " + ClintonVotes);
  clintonVoteParagraph.position(0, 1050);
  demographicParagraph.html("Number of votes more that Obama had in the selected demographics (or less, if value is negative): " + round(-(demographic)))
  demographicParagraph.position(0, 1080);
  modifiedVoteParagraph.html("Clinton modified number of votes (adding Obama's additional, or fewer, votes in the demographics, to Clinton's original): " + round((ClintonVotes-demographic)));
  modifiedVoteParagraph.position(0, 1110);
  trumpVoteParagraph.html("Trump's Number of Votes: " + trump);
  trumpVoteParagraph.position(0,1150);
  clintonWinParagraph.html("Does Clinton now win the state? " + yesno + round(abs((ClintonVotes-demographic)-(trump))) + " votes");
  clintonWinParagraph.position(0,1180);
}

