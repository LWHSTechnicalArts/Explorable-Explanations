Code:
//classes for the carbon and oxygen atoms on slide 2
var carbon = [];
var oxygen = [];
//classes for respirated carbon and burned and released carbon on slide 3
var rescarbon = [];
var burncarbon = [];
//image on slide 1
var img = 1;
//slide number counter
var slideNum = 0;



function preload() {
  //the loaded image
  img = loadImage("Rainforestpic.jpg");
}

function setup() {
  //creating a canvas, establishing buttons and their corresponding functions. The next button goes to the next slide. The start button begins the slideshow. The back button goes back 1 slide.
  createCanvas(400, 400);
  beginButton = createButton("Start");
  beginButton.mousePressed(nextSlide);
  beginButton2 = createButton("Next")
  beginButton2.mousePressed(nextSlide);
  backButton = createButton("Back");
  backButton.mousePressed(backSlide);
  //number of atoms + the specific action they should be doing.
  for (var p = 0; p < 20; p++) {
    carbon[p] = new Absorb();

  }
  for (var z = 0; z < 20; z++) {
    oxygen[z] = new Leave();
  }
  for (var o = 0; o < 3; o++) {
    rescarbon[o] = new carbonLeave();
  }
  for (var q = 0; q < 10; q++) {
    burncarbon[q] = new bcarbonLeave();
  }
}

function draw() {
  //start button hides at slide 1 and next button appears. back button appears on slide 2, so one can go back to slide 1, but not to slide 0, which doesn't exist.
  if (slideNum === 0) {
    beginButton2.hide();
    backButton.hide();
  } else if (slideNum == 1) {
    beginButton2.show();
    beginButton.hide();
  } else if (slideNum >= 2) {
    backButton.show();
  } 
  //commands for slide number 1
  if (slideNum == 1) {
    backButton.hide();
    //image of rainforest
    image(img, 0, 0, 400, 400);
    //rainforest title
    fill('black');
    ellipse(175, 195, 150, 50);
    fill('green');
    textSize(26);
    text("Rainforests", 112, 200);
    //commands for slide number 2
  } else if (slideNum == 2) {
    background(255);
    fill('black');
    textSize(16);
    //text explaining animation
    text("How do rainforests help combat global warming?", 20, 20);
    textSize(14);
    text("Plants take carbon out of the atmosphere and", 20, 40)
    text("release oxygen during photosynthesis. This ", 20, 60)
    text(" animation demonstrates that process.", 20, 80);
    fill('green');
    rect(0, 370, 400, 30);
    textSize(18);
    fill('black');
    text("forest", 180, 390);
    noFill();
    //giving objects functions such as moving down/up and displaying as letters.
    for (var p = 0; p < carbon.length; p++) {
      carbon[p].move();
      carbon[p].display();

    }
    for (var z = 0; z < oxygen.length; z++) {
      oxygen[z].move();
      oxygen[z].display();

    }
    //commands for slide 3
  } else if (slideNum == 3) {
    beginButton2.show();
    background(255, 255, 255);
    fill('black');
    textSize(16);
    //explaining animation.
    text("So how does deforestation contribute to", 20, 20);
    text("global warming?", 20, 40);
    textSize(14);
    text("Plants naturally release small amounts of carbon", 20, 60);
    text("during respiration, but all of the stored carbon", 20, 80);
    text("is released when a plant is cut down and burned.", 20, 100);
    noStroke();
    fill('green');
    rect(0, 370, 200, 30);
    textSize(18);
    fill('red');
    rect(200, 370, 200, 30);
    fill('black');
    text("forest", 180, 390);
    rect(195, 120, 10, 250);
    text("Respiration", 50, 130);
    text("Deforestation", 245, 130);
    //assigning functions to objects. Carbon moves up.
    for (var o = 0; o < rescarbon.length; o++) {
      rescarbon[o].move();
      rescarbon[o].display();

    }
    for (var q = 0; q < burncarbon.length; q++) {
      burncarbon[q].move();
      burncarbon[q].display();

    }
  } else if (slideNum == 4) {
    beginButton2.hide();
    background(255, 255, 255);
    fill('black');
    textSize(18);
    text("More Information", 20, 20);
    textSize(14);
    text("http://www.ucsusa.org/global_warming/solutions/stop-deforesta", 20, 50);
    text("tion/tropical-deforestation-and-1.html#.WEt_sOYrIrg", 20, 60);
    text("https://www.scientificamerican.com/article/",20,80);
    text("deforestation-and-global-warming/", 20, 90);
    textSize(18);
    text("Places to Donate to", 20, 200);
    textSize(14);
    text("https://www.rainforesttrust.org/", 20, 220);
    text("http://www.ucsusa.org/", 20, 240)
  }
}


//when next button is pressed, slide changes
function nextSlide() {
  slideNum = slideNum + 1;

}
//when back button is pressed, slide goes 1 back
function backSlide() {
  slideNum = slideNum - 1;
}
// function for forest absorbing carbon
function Absorb() {
  this.x = random(20, 380);
  this.y = random(65, 75);
  this.speed = random(.1, .3);

  //causes carbon atoms to drift down towards forest
  this.move = function() {
    if (this.y < 400) {
      this.y += random(2 * this.speed, 3 * this.speed);
    } else {
      this.y = 100;
    }
  };
  //displays carbon atoms as little C's
  this.display = function() {
    fill('red');
    text("C", this.x, this.y);
    noFill();


  };
}
//function for oxygen leaving forest
function Leave() {
  this.x = random(20, 380);
  this.y = 400;
  this.speed = random(.1, .3);

  //causes oxygen atoms to drift away from forest
  this.move = function() {
      if (this.y > 100) {
        this.y += random(-2 * this.speed, -3 * this.speed);
      } else {
        this.y = 400;
      }
    }
    //displays oxygen atoms as little O's
  this.display = function() {
    fill('blue');
    text("O", this.x, this.y);
    noFill();

  }
}


//function for carbon leaving forest
function carbonLeave() {
  this.x = random(20, 100);
  this.y = 400;
  this.speed = random(.1, .3);

  //causes carbon atoms to drift away from forest
  this.move = function() {
      if (this.y > 140) {
        this.y += random(-2 * this.speed, -3 * this.speed);
      } else {
        this.y = 400;
      }
    }
    //displays carbon atoms as little C's
  this.display = function() {
    fill('red');
    text("C", this.x, this.y);
    noFill();

  }
}
//function for carbon leaving flaming forest
function bcarbonLeave() {
  this.x = random(200, 340);
  this.y = 400;
  this.speed = random(.1, .3);

  //causes carbon atoms to drift away from forest
  this.move = function() {
      if (this.y > 140) {
        this.y += random(-2 * this.speed, -3 * this.speed);
      } else {
        this.y = 400;

      }
    }
    //displays carbon atoms as little C's
  this.display = function() {
    fill('red');
    text("C", this.x, this.y);

  }
}