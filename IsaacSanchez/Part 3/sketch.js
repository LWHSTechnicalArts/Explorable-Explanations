var xTslider, yTSlider
var x = 270
var y = -50
var canvas
var canvasX = 0
var canvasY = 200

function setup() {
  canvas = createCanvas(900, 500);
  canvas.position(canvasX,canvasY)
  textSize(15);

  // create sliders
  xTSlider = createSlider(-250, 250, 0);
  xTSlider.position(520, 60+canvasY);
  yTSlider = createSlider(-250, 250, 0);
  yTSlider.position(720, 60+canvasY);
  xDSlider = createSlider(-100, 100, 10);
  xDSlider.position(520, 100+canvasY);
  // yDSlider = createSlider(-100, 100, 10);
  // yDSlider.position(720, 100+canvasY);
}

function draw() {
  background(255)
  stroke(0)
//Set the origin to be at the middle of the screen for simplicity
  translate(250,250)

//x-axis increments
  push()
  for(var column=0;column<=49;column++) {
 line(-250, 5, -250, -5);
 translate(10,0) //x-translate normally
 }
pop()

//y-axis increments
push()
  for(var row=0;row<=49;row++) {
 line(-5, -250, 5, -250);
 translate(0,10) //x-translate normally
 }
pop()

//x and y-axis creation
  line(0,-250,0,250)
  line(-250,0,250,0)

//rounds down the numbers from the 
  var xT = round(xTSlider.value()/5)*5;
  var yT = round(yTSlider.value()/5)*5;
  var xD = round(xDSlider.value()/2)/5
  var yD = 1

//draws the lines
  stroke(255,33,67)
  line(-xT, -yT, ((-xT*xD)+70)/xD, yD*((-yT/yD)+60));
  line(((-xT*xD)-30)/xD, ((-yT/yD)+10)*yD, -xT, -yT)

//adds a boundary to the right of the graph
  noStroke()
  rect(250,-250,500,500)
  stroke(0,0,0)
  textSize(20)
//super long if-then statement 
  if(xT > 0) {
    if(yT > 0){
      if(xD == 1){
        if(yD == 1){
          text("h(x)="+"f(x+"+xT/10+")"+"+"+yT/10, x, y);
        }else{
          text("h(x)="+yD+"*f(x+"+xT/10+")"+"+"+yT/10, x, y);
        }
      }else{
        if(yD == 1){
          text("h(x)="+"f("+xD+"*(x+"+xT/10+"))"+"+"+yT/10, x, y);
        }else{
          text("h(x)="+yD+"*f("+xD+"*(x+"+xT/10+"))"+"+"+yT/10, x, y);
        }
      }
    }else if(yT < 0){
      if(xD == 1){
        if(yD == 1){
          text("h(x)="+"f(x+"+xT/10+")"+yT/10, x, y);
        }else{
          text("h(x)="+yD+"*f(x+"+xT/10+")"+yT/10, x, y);
        }
      }else{
        if (yD == 1){
          text("h(x)="+"f("+xD+"*(x+"+xT/10+"))"+yT/10, x, y);
        }else{
          text("h(x)="+yD+"*f("+xD+"*(x+"+xT/10+"))"+yT/10, x, y);
        }
      }
    }else{
      if(xD == 1){
        if(yD == 1){
          text("h(x)="+"f(x+"+xT/10+")", x, y);
        }else{
          text("h(x)="+yD+"*f(x+"+xT/10+")", x, y);
        }
      }else{
        if(yD == 1){
          text("h(x)="+"f("+xD+"*(x+"+xT/10+"))", x, y);
        }else{
          text("h(x)="+yD+"*f("+xD+"*(x+"+xT/10+"))", x, y);
        }
      }
    }
  }else if (xT < 0){
    if(yT > 0){
      if(xD == 1){
        if(yD == 1){
          text("h(x)="+"f(x"+xT/10+")"+"+"+yT/10, x, y);
        }else{
          text("h(x)="+yD+"*f(x"+xT/10+")"+"+"+yT/10, x, y);
        }
      }else{
        if(yD == 1){
          text("h(x)="+"f("+xD+"*(x"+xT/10+"))"+"+"+yT/10, x, y);
        }else{
          text("h(x)="+yD+"*f("+xD+"*(x"+xT/10+"))"+"+"+yT/10, x, y);
        }
      }
    }else if(yT < 0){
      if (xD == 1){
        if(yD == 1){
          text("h(x)="+"f(x"+xT/10+")"+yT/10, x, y);
        }else{
          text("h(x)="+yD+"*f(x"+xT/10+")"+yT/10, x, y);
        }
      }else{
        if(yD == 1){
          text("h(x)="+"f("+xD+"*(x"+xT/10+"))"+yT/10, x, y);
        }else{
          text("h(x)="+yD+"*f("+xD+"*(x"+xT/10+"))"+yT/10, x, y);
        }
      }
    }else{
      if (xD == 1){
        if(yD == 1){
          text("h(x)="+"f(x"+xT/10+")", x, y);
        }else{
          text("h(x)="+yD+"*f(x"+xT/10+")", x, y);
        }
      }else{
        if(yD == 1){
          text("h(x)="+"f("+xD+"*(x"+xT/10+"))", x, y);
        }else{
          text("h(x)="+yD+"*f("+xD+"*(x"+xT/10+"))", x, y);
        }
      }
    }
  }else{
    if(yT > 0){
      if(xD == 1){
        if(yD == 1){
          text("h(x)="+"f(x)"+"+"+yT/10, x, y)
        }else{
          text("h(x)="+yD+"*f(x)"+"+"+yT/10, x, y)
        }
      }else{
        if(yD == 1){
          text("h(x)="+yD+"*f("+xD+"*x)"+"+"+yT/10, x, y)
        }
      }
    }else if(yT < 0){
      if(xD == 1){
        if(yD == 1){
          text("h(x)="+"f(x)"+yT/10, x, y)
        }else{
          text("h(x)="+yD+"*f(x)"+yT/10, x, y)
        }
      }else{
        if(yD == 1){
          text("h(x)="+"f("+xD+"*x)"+yT/10, x, y)
        }else{
          text("h(x)="+yD+"*f("+xD+"*x)"+yT/10, x, y)
        }
      }
    }else{
      if (xD == 1){
        if(yD == 1){
          text("h(x)="+"f(x)", x, y)
        }else{
          text("h(x)="+yD+"*f(x)", x, y)
        }
      }else{
        if(yD == 1){
          text("h(x)="+"f("+xD+"*x)", x, y)
        }else{
          text("h(x)="+yD+"*f("+xD+"*x)", x, y)
        }
      }
    }
  }
  textSize(15)
  text(xT/10, 405, -175);
  text(yT/10, 605, -175);
  text(xD, 405, -135);
  //text(yD, 605, -135);
  text("x Transformations:",270,-230)
  text("y Transformations:",470,-230)
  textSize(10)
  text("x-Translate (h):",270,-192)
  text("y-Translate (k):",470,-192)
  text("x-Dilate (b):",270,-152)
  // text("y-Dilate (a):",470,-152)
  
  //yT is negative because a higher y-value in p5 is equivalent to translating "down"
}

