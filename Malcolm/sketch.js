var button;
var loadingstate = 0;
var TimerText = 0;
var InsaneScreen = false;
var showloading = false;
var PatienceTimer
var clickcounter = 0;
var patiencescreen = false;
var flashtime = false;
var myArray = [];
var counter = 0;

function setup() {
  createCanvas(500, 500);
  background(0, 0, 0);
  button = createButton("Click");
  button.position(225, 475);
  button.mousePressed(buttonAction);

  gameText = "Loading"
  PText = "Congrats! You're patient! Sorry for wasting your time though."
  NPText = "You're pretty impatient... Least you didn't waste you time."
  translate(300, 300);
  textSize(30);
  text("Font Size 30", 10, 300);

  timer = millis();

  myArray.push(color(255, 0, 0));
  myArray.push(color(0, 0, 255));
}

function changeColor() {
  background(myArray[counter]);
  counter = (counter + 1) % myArray.length;
}

function draw() {
  background(0);
  if (flashtime) {
    background(random(0, 255));
  }
  text(gameText, 128, 225, 400, 400);

  text(PText, 100, 100, 400, 400);
  text(NPText, 100, 100, 400, 400);

  if (showloading) {

    dotdotdot(loadingstate);

  }


  if (patiencescreen) {
    translate(-150, 50);
    text("Time Since Clicked: " + round((millis() - timer) / 1000), width / 2, height / 2);
    textSize(30);
  }
}

function buttonAction() {
  clickcounter++;

  if (clickcounter === 1) {
    fill(255, 255, 255);
    gameText = "Loading"
    PText = ""
    NPText = ""
    setInterval(change_state, 1500);
    showloading = true;
    PatienceTimer = millis();
  } else if (clickcounter === 2) {
    console.log("Click Twice");
    gameText = ""
    showloading = false;
    TimerText = 0;
    patiencescreen = true;
    if (millis() - PatienceTimer > 30000) {

      PText = "Congrats! You're patient! Sorry for wasting your time though."
    } else if (millis() - PatienceTimer < 2000) {
      NPText = "You're pretty impatient... Least you didn't waste you're time."
    }
  } else if (clickcounter === 3) {
    console.log("Click Thrice")
    InsaneScreen = true;
    patiencescreen = false;
    TimerText = false;
    flashtime = true;
    PText = ""
    NPText = ""
    setInterval(changeColor, 50);
  }

}

function change_state() {
  loadingstate = (loadingstate + 1) % 3;
}

function dotdotdot(s) {
  var y;
  switch (s) {
    case 0:
      fill(255, 255, 255);
      ellipse(250, 250, 12.5, 12.5);
      break;
    case 1:
      fill(255, 255, 255);
      ellipse(250, 250, 12.5, 12.5);
      ellipse(275, 250, 12.5, 12.5);
      break;
    case 2:
      fill(255, 255, 255);
      ellipse(250, 250, 12.5, 12.5);
      ellipse(275, 250, 12.5, 12.5);
      ellipse(300, 250, 12.5, 12.5);
      break;
    default:
      break;
  }
}