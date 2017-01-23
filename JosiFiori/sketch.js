// Sources for statistics: https://www.monmouth.edu/polling-institute/reports/MonmouthPoll_US_092816/ , http://www.people-press.org/2016/08/03/few-clinton-or-trump-supporters-have-close-friends-in-the-other-camp/ , http://www.people-press.org/2016/11/10/a-divided-and-pessimistic-electorate/
// Sources for code: Natalie Freed, in-person conversations

var trueBottom;
var falseButton;
var nextButton;
var endButton;
var screenText;

// creates variables for questions, answers, and true/false in correct order
var questions = ["The majority of the population says that the best word to describe their feeling towards the federal government is \"angry\". ", "70% of people believe that the 2016 election has brought out the worst in people.", "65% think that the harsh language used in politics is unjustified.", "Less than 2 in 10 voters have had an argument about the election.", "The majority of millennials have had an argument about the election.", "About a tenth of the population claims they have no close friends who support the opposing candidate.", "Clinton and Trump supporters are deeply divided in what they consider the most severe problems facing the country to be."];
var answers = ["Two-thirds of the population says they're \"dissatisfied\" with Washington.", "The majority of both Republicans (65%) and Democrats (78%) agree on this.", "Only 30% say the current state of the country justifies harsh language in politics.", "37% of voters from both parties have had political arguments this election.", "54% of voters under 30 have had an election-related argument.", "Almost half (47%) of Clinton supporters have no close friends who support Trump, while 31% of Trump supporters don't have any Clinton-supporting friends.", ""];
var truefalse = ["false", "true", "true", "false", "true", "false", "true", ""]
var answerCounter = 0

function setup() {

 // sets up canvas
 createCanvas(1000, 700);
 background("#d6feff");

 // makes "true" button
 trueButton = createButton("true");
 trueButton.position(440, 540);
 trueButton.style("background-color", "#94f7d8");
 trueButton.style("color", "#00281c");
 trueButton.style("font-size", "20px");

 // makes "false" button
 falseButton = createButton("false");
 falseButton.position(500, 540);
 falseButton.style("background-color", "#94f7d8");
 falseButton.style("color", "#00281c");
 falseButton.style("font-size", "20px");

 // makes "next" button
 nextButton = createButton("next");
 nextButton.position(625, 555);
 nextButton.style("background-color", "#dfb2ff");
 nextButton.style("color", "#170028");
 nextButton.style("font-size", "20px");

 nextButton.hide();

 // makes "end" button
 endButton = createButton("end");
 endButton.position(625, 555);
 endButton.style("background-color", "#dfb2ff");
 endButton.style("color", "#170028");
 endButton.style("font-size", "20px");

 endButton.hide();

 // shows the right question at the right time
 screenText = createP(questions[answerCounter]);
 screenText.position(335, 160);
 screenText.style("font-size", "30px");
 screenText.style("width", "340px");

 // asks "true or false?"
 truefalseText = createP("true or false?");
 truefalseText.position(375, 57);
 truefalseText.style("font-size", "50px")

 // when you press a button, takes you to correct function
 trueButton.mousePressed(answered);
 falseButton.mousePressed(answered);
 nextButton.mousePressed(nextQuestion);
 endButton.mousePressed(endStatement);

 // prepares image
 problemstats = loadImage("problemstats.png");

 // makes box
 rectMode(CENTER);
 var rectwidth = width / 2
 var rectheight = height / 2
 rect(rectwidth, rectheight, 400, 520, 10);

}

function draw() {

 // shows image at the right time
 if (answerCounter == 7) {
  image(problemstats, 375, 167, 255, 443);
  nextButton.hide
  endButton.show();
 }
}

function answered() {

 if (answerCounter < 7) {
  screenText.html(answers[answerCounter]);

  trueButton.hide();
  falseButton.hide();
  nextButton.show();

  truefalseText.show();
  truefalseText.html(truefalse[answerCounter]);
  truefalseText.position(450, 57);

  answerCounter++

 }
}

function nextQuestion() {
 if (answerCounter < 7) {
  screenText.html(questions[answerCounter]);
  truefalseText.html("true or false?");
  truefalseText.position(375, 57);
  trueButton.show();
  falseButton.show();
  nextButton.hide();
 }
}

function endStatement() {
 clear();
 truefalseText.hide
 screenText.hide
  // strokeWeight(5);
  // stroke(23,45,465,235);
}