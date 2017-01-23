var blankcircle;
var x = 0;
var y = 0;
var xstart = 0;
var ystart = 0;
var xend = 600;
var yend = 550;
var button;
var slider;
var nameP;
var nameP2;
var nameP3;
var input;

function setup() {
 createCanvas(xend, yend);
 // graph paper background
 for (var i = 0; i <= xend / 20; i++) {
  fill(0, 100, 100, 100);
  stroke(0, 220, 250, 255);
  line(xstart, i * 20, xend, i * 20);
  line(i * 20, ystart, i * 20, yend);
 }


 button = createButton("π/6");
 button.mousePressed(showangle1);

 button = createButton("π/4");
 button.mousePressed(showangle2);

 button = createButton("π/3");
 button.mousePressed(showangle3);

 button = createButton("π/2");
 button.mousePressed(showangle4);

 button = createButton("2π/3");
 button.mousePressed(showangle5);

 button = createButton("3π/4");
 button.mousePressed(showangle6);

 button = createButton("5π/6");
 button.mousePressed(showangle7);

 button = createButton("π");
 button.mousePressed(showangle8);

 button = createButton("7π/6");
 button.mousePressed(showangle9);

 button = createButton("5π/4");
 button.mousePressed(showangle10);

 button = createButton("4π/3");
 button.mousePressed(showangle11);

 button = createButton("3π/2");
 button.mousePressed(showangle12);

 button = createButton("5π/3");
 button.mousePressed(showangle13);

 button = createButton("7π/4");
 button.mousePressed(showangle14);

 button = createButton("11π/6");
 button.mousePressed(showangle15);

 button = createButton("2π");
 button.mousePressed(showangle16);


 // Shows definition of a unit circle
 nameP = createP('What is a unit circle?');
 nameP.mouseOver(overpara);
 nameP.mouseOut(outpara);
 // shows definition of a radian
 nameP2 = createP('What is a radian?');
 nameP2.mouseOver(overpara2);
 nameP2.mouseOut(outpara2);
 // Shows value of pi
 nameP3 = createP('What is the value of pi?');
 nameP3.mouseOver(overpara3);
 nameP3.mouseOut(outpara3);
 // Shows conversion
 nameP4 = createP('I have only learned about angles measured in degrees--how can I convert between degrees and radians?');
 nameP4.mouseOver(overpara4);
 nameP4.mouseOut(outpara4);
}


// Shows definition of a unit circle (part 2)
function overpara() {
 nameP.html('A unit circle is a circle with the radius of 1.');
}

function outpara() {
 nameP.html('What is a unit circle?');
}

// Shows definition of a radian (part 2)
function overpara2() {
 nameP2.html('A radian is the measure of a central angle that corresponds to an arc whose length is equal to the radius of a unit circle.');
}

function outpara2() {
 nameP2.html('What is a radian?');
}

// Shows value of pi (part 2)
function overpara3() {
 nameP3.html('π = 3.141592653589793238462643383279502884197169399375105....');
}

function outpara3() {
 nameP3.html('What is the value of pi?');
}

// Shows conversion (part 2)
function overpara4() {
 nameP4.html('The conversion between radians and degrees is simple! The first main thing to know is that π = 180º. You can then use this information to convert all the angles from radians to degrees. For example, when you substitute 180º for π, π/6 = 30º.');
}

function outpara4() {
 nameP4.html('I have only learned about angles measured in degrees--how can I convert between degrees and radians?');
}


function draw() {
 // purple sine function
 noStroke();
 fill(50, 0, 100, 100);
 ellipse(x, 20 * sin(x / 20) + height / 2, 10, 10);
 x += .75;
 // pink sine function
 noStroke();
 fill(100, 0, 75, 100);
 ellipse(x, 20 * sin(x / 20) + 7 * height / 10, 10, 10);
 x += .75;
 // blue sine function
 noStroke();
 fill(0, 100, 200, 100);
 ellipse(x, 20 * sin(x / 20) + 9 * height / 10, 10, 10);
 x += .75;

}

function showangle1() {
 //original unit circle
 stroke(4);
 fill(255);
 ellipse(150, 150, 150, 150);
 // center dot
 fill(255);
 ellipse(150, 150, 3, 3);
 // x axis
 stroke(10, 10, 10, 255);
 line(150, 50, 150, 250);
 // y axis
 stroke(10, 10, 10, 255);
 line(50, 150, 250, 150);
 // 30 degree angle
 stroke(255, 0, 0, 255);
 line(150, 150, 300 + sqrt(3), 75);
}

function showangle2() {
 //original unit circle
 stroke(4);
 fill(255);
 ellipse(150, 150, 150, 150);
 // center dot
 fill(255);
 ellipse(150, 150, 3, 3);
 // x axis
 stroke(10, 10, 10, 255);
 line(150, 50, 150, 250);
 // y axis
 stroke(10, 10, 10, 255);
 line(50, 150, 250, 150);
 // 45 degree angle
 stroke(255, 0, 0, 255);
 line(150, 150, 300 + 1 / sqrt(2), 1 / sqrt(2));
}

function showangle3() {
 //original unit circle
 stroke(4);
 fill(255);
 ellipse(150, 150, 150, 150);
 // center dot
 fill(255);
 ellipse(150, 150, 3, 3);
 // x axis
 stroke(10, 10, 10, 255);
 line(150, 50, 150, 250);
 // y axis
 stroke(10, 10, 10, 255);
 line(50, 150, 250, 150);
 // 60 degree angle
 stroke(255, 0, 0, 255);
 line(150, 150, 225, sqrt(3));
}

function showangle4() {
 //original unit circle
 stroke(4);
 fill(255);
 ellipse(150, 150, 150, 150);
 // center dot
 fill(255);
 ellipse(150, 150, 3, 3);
 // x axis
 stroke(10, 10, 10, 255);
 line(150, 50, 150, 250);
 // y axis
 stroke(10, 10, 10, 255);
 line(50, 150, 250, 150);
 // 90 degree angle
 stroke(255, 0, 0, 255);
 line(150, 150, 150, sqrt(3));
}

function showangle5() {
 //original unit circle
 stroke(4);
 fill(255);
 ellipse(150, 150, 150, 150);
 // center dot
 fill(255);
 ellipse(150, 150, 3, 3);
 // x axis
 stroke(10, 10, 10, 255);
 line(150, 50, 150, 250);
 // y axis
 stroke(10, 10, 10, 255);
 line(50, 150, 250, 150);
 // 120 degree angle
 stroke(255, 0, 0, 255);
 line(150, 150, 75, sqrt(3));
}

function showangle6() {
 //original unit circle
 stroke(4);
 fill(255);
 ellipse(150, 150, 150, 150);
 // center dot
 fill(255);
 ellipse(150, 150, 3, 3);
 // x axis
 stroke(10, 10, 10, 255);
 line(150, 50, 150, 250);
 // y axis
 stroke(10, 10, 10, 255);
 line(50, 150, 250, 150);
 // 135 degree angle
 stroke(255, 0, 0, 255);
 line(150, 150, 1 / sqrt(2), 1 / sqrt(2));
}

function showangle7() {
 //original unit circle
 stroke(4);
 fill(255);
 ellipse(150, 150, 150, 150);
 // center dot
 fill(255);
 ellipse(150, 150, 3, 3);
 // x axis
 stroke(10, 10, 10, 255);
 line(150, 50, 150, 250);
 // y axis
 stroke(10, 10, 10, 255);
 line(50, 150, 250, 150);
 // 150 degree angle
 stroke(255, 0, 0, 255);
 line(150, 150, sqrt(3), 75);
}

function showangle8() {
 //original unit circle
 stroke(4);
 fill(255);
 ellipse(150, 150, 150, 150);
 // center dot
 fill(255);
 ellipse(150, 150, 3, 3);
 // x axis
 stroke(10, 10, 10, 255);
 line(150, 50, 150, 250);
 // y axis
 stroke(10, 10, 10, 255);
 line(50, 150, 250, 150);
 // 180 degree angle
 stroke(255, 0, 0, 255);
 line(150, 150, sqrt(3), 150);
}

function showangle9() {
 //original unit circle
 stroke(4);
 fill(255);
 ellipse(150, 150, 150, 150);
 // center dot
 fill(255);
 ellipse(150, 150, 3, 3);
 // x axis
 stroke(10, 10, 10, 255);
 line(150, 50, 150, 250);
 // y axis
 stroke(10, 10, 10, 255);
 line(50, 150, 250, 150);
 // 210 degree angle
 stroke(255, 0, 0, 255);
 line(150, 150, 1 / sqrt(2), 225 + 1 / sqrt(2));
}

function showangle10() {
 //original unit circle
 stroke(4);
 fill(255);
 ellipse(150, 150, 150, 150);
 // center dot
 fill(255);
 ellipse(150, 150, 3, 3);
 // x axis
 stroke(10, 10, 10, 255);
 line(150, 50, 150, 250);
 // y axis
 stroke(10, 10, 10, 255);
 line(50, 150, 250, 150);
 // 225 degree angle
 stroke(255, 0, 0, 255);
 line(150, 150, 1 / sqrt(2), 300 + 1 / sqrt(2));
}

function showangle11() {
 //original unit circle
 stroke(4);
 fill(255);
 ellipse(150, 150, 150, 150);
 // center dot
 fill(255);
 ellipse(150, 150, 3, 3);
 // x axis
 stroke(10, 10, 10, 255);
 line(150, 50, 150, 250);
 // y axis
 stroke(10, 10, 10, 255);
 line(50, 150, 250, 150);
 // 240 degree angle
 stroke(255, 0, 0, 255);
 line(150, 150, 75, 300 + sqrt(3));
}

function showangle12() {
 //original unit circle
 stroke(4);
 fill(255);
 ellipse(150, 150, 150, 150);
 // center dot
 fill(255);
 ellipse(150, 150, 3, 3);
 // x axis
 stroke(10, 10, 10, 255);
 line(150, 50, 150, 250);
 // y axis
 stroke(10, 10, 10, 255);
 line(50, 150, 250, 150);
 // 270 degree angle
 stroke(255, 0, 0, 255);
 line(150, 150, 150, 300);
}

function showangle13() {
 //original unit circle
 stroke(4);
 fill(255);
 ellipse(150, 150, 150, 150);
 // center dot
 fill(255);
 ellipse(150, 150, 3, 3);
 // x axis
 stroke(10, 10, 10, 255);
 line(150, 50, 150, 250);
 // y axis
 stroke(10, 10, 10, 255);
 line(50, 150, 250, 150);
 // 300 degree angle
 stroke(255, 0, 0, 255);
 line(150, 150, 225, 300 + sqrt(3));
}

function showangle14() {
 //original unit circle
 stroke(4);
 fill(255);
 ellipse(150, 150, 150, 150);
 // center dot
 fill(255);
 ellipse(150, 150, 3, 3);
 // x axis
 stroke(10, 10, 10, 255);
 line(150, 50, 150, 250);
 // y axis
 stroke(10, 10, 10, 255);
 line(50, 150, 250, 150);
 // 315 degree angle
 stroke(255, 0, 0, 255);
 line(150, 150, 300 + 1 / sqrt(2), 300 + 1 / sqrt(2));
}

function showangle15() {
 //original unit circle
 stroke(4);
 fill(255);
 ellipse(150, 150, 150, 150);
 // center dot
 fill(255);
 ellipse(150, 150, 3, 3);
 // x axis
 stroke(10, 10, 10, 255);
 line(150, 50, 150, 250);
 // y axis
 stroke(10, 10, 10, 255);
 line(50, 150, 250, 150);
 // 330 degree angle
 stroke(255, 0, 0, 255);
 line(150, 150, 300 + 1 / sqrt(2), 225 + 1 / sqrt(2));
}

function showangle16() {
 //original unit circle
 stroke(4);
 fill(255);
 ellipse(150, 150, 150, 150);
 // center dot
 fill(255);
 ellipse(150, 150, 3, 3);
 // x axis
 stroke(10, 10, 10, 255);
 line(150, 50, 150, 250);
 // y axis
 stroke(10, 10, 10, 255);
 line(50, 150, 250, 150);
 // 360 degree angle
 stroke(255, 0, 0, 255);
 line(150, 150, 300 + sqrt(3), 150);
}