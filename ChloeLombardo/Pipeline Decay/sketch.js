function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  slider = createSlider(0, 200,0);
  slider.position(10, 10);
  slider.style('width', '100px');
  
}  

g = "Soil Lost Side View";
f = "Soil Lost Arial View";
h = "Slide the slider to see the change in dirt distribution as the Dakota Pipeline construction takes place. "
j = "50ft"
k = '30" Steel Pipeline'
w = 'The Clay Dirt is dug up and covers the top soil (black dirt) around the pipe and wind rain and plowing will mix the clay into the surrounding areas of top soil making it unfarmable. '
w2 = 'The construction guidelines states that the pipeline can be placed anywhere within a desiganted 50ft width area.'
w3 = 'Top soil is soft and absorbs water allowing it to be perfect soil for farming'
h1 = 'The green represents land that can be farmed because it has top soil underneath.'
h2 = '30" Steel Pipeline'
h3 = 'The clay dirt is underneath the 5ft of topsoil.'
h4 = '5ft'
r  = 'The top soil is moved to put the pipe in, which mixes the clay and top soil making the ground farmable.'
b1 = '"Clay Dirt" Unfarmable Soil'
b2 = "Vegetation"
b3 = '"Black Dirt" Top Soil'
b4 = "Pipeline"

var slider;

function draw() {
  background(255);
//slider
  var val = slider.value();
//ground 1
  noStroke();
  fill("green");
  rect(60,80,windowWidth-80, (windowHeight/2)-80);
  fill(112, 67, 8,255-val);
  rect(60,90,windowWidth-80, (windowHeight/2)-80);
//ground 2
  noStroke();
  fill("green");
  rect(60,(windowHeight/2)+40,windowWidth-80, (windowHeight/2)-80);
  fill(112, 67, 8,val);
  rect(60,(windowHeight/2)+40,windowWidth-80, (windowHeight/2)-80);
//Title 1
  fill("white");
  rect(windowWidth/3, 14,(windowWidth/2)-100, 25); 
  fill(50);
  textFont("Charter Black");
  textStyle(BOLD);
  textSize(18);
  textAlign(CENTER,CENTER);
  text(g,(windowWidth/3), 55, (windowWidth/2)-100, 25); 
//Title 2
  fill("white");
  rect(windowWidth/3, (windowHeight/2)+10,(windowWidth/2)-100, 25); 
  fill(50);
  textFont("Charter Black");
  textSize(18);
  textStyle(BOLD);
  textAlign(CENTER,CENTER);
  text(f,(windowWidth/3), (windowHeight/2)+10, (windowWidth/2)-100, 25); 
  textStyle(NORMAL);
  
//slider description
  fill(50);
  textFont(8);
  text(h,130, -75, 400, 200); 
  
//outline box 1
  noFill();
  stroke(50,50,50,val);
  rect(50,90,windowWidth-80, 103);
  noStroke();
  
//red clay 1
  fill(189, 36, 36);
  rect(60,170,windowWidth-80, (windowHeight/2)-160);
  
// 1 clay on top
  fill(50,50,50,val)
  text(h4,-375,130,windowWidth-80, 20);
  
//red clay 2
  noStroke();
  push();
  rectMode(CENTER);
  fill(189, 36, 36);
  rect(465,(windowHeight/2)+160,windowWidth-80, val);
  stroke(50,50,50,val);
  noFill();
  rect(460,(windowHeight/2)+160,windowWidth-70, val);
  pop();
  fill(46,46,46,val);
  text(j,-375,(windowHeight/2)+155,windowWidth-80, 20);
  
//pipe 2
  fill(46,46,46,val);
  rect(60,(windowHeight/2)+155,windowWidth-80, 20);

//color boxes                                                    //txt boxes not showing
  fill(50);
  textFont(8);
  text(b1,545,45,50,50);
  fill(189, 36, 36); //red
  rect(555,10,30,10);
  
  fill("green");  //green
  rect(630,10,30,10);
  fill(50);
  text(b2,630, 20,50,50);
  
  fill(112, 67, 8);  //brown
  rect(710,10,30,10);
  fill(50);
  text(b3,710,55,50,50);
  
  fill(46,46,64);  //black
  rect(800,10,30,10);
  fill(50);
  textFont(8);
  text(b4,800,20,50,50);

//1 dirt on top
  fill(189, 36, 36,val);
  rect(60,90,windowWidth-80, (windowHeight/2)-80);

//vegetation 2 description
  fill(255,255,255,200-val)
  text(h1,63,(windowHeight/2)+90,windowWidth-80, 50);
  
//2 pipe description 
  fill(255,255,255,(val)*2);                                                      
  text(k,70,(windowHeight/2)+140,windowWidth-80, 50);
//2 clay description  
  fill(255,255,255,(val)*2);                                                      
  text(w,63,(windowHeight/2)+90,windowWidth-80, 50);
  text(w2,63,(windowHeight/2)+190,windowWidth-80, 50);
//1 black dirt description
  fill(255,255,255,200-val)
  text(w3,60,20,windowWidth-80, (windowHeight/2)-80);

//pipe 1
  fill(46,46,46,val);
  rect(60,val-30,windowWidth-80, 23);
  
//pipe 1 description 
  fill(255,255,255,val*2);
  text(h2, 60,val-30,windowWidth-80, 23);

//clay 1 description
  fill(255,255,255);
  text(h3, 60,170,windowWidth-80, (windowHeight/2)-160);
 
//1 clay on top description
  fill(255,255,255,val*2);
  text(r,50,90,windowWidth-80, (windowHeight/2)-220); 

}

/*function setup() {
   canvas = createCanvas(windowWidth, windowHeight);
}

function draw() {
//ground 1
  noStroke();
  fill("brown");
push;
  scale(windowWidth/1200);
  scale(1,0);
  translate(0,100);
beginShape(); //water/oil
  vertex(20,257);
  bezierVertex(17,412,173,498,220,326);
  bezierVertex(233,406,368,645,429,310);
  bezierVertex(308,253,517,638,651,364);
  bezierVertex(723,653,954,421,909,254);
  bezierVertex(771,510,1136,552,1139,260);
  bezierVertex(684,96,803,434,251,197);
  bezierVertex(191,192,175,170,85,214);
  vertex(20,257);
endShape();
pop;

//ground 2
  noStroke();
  fill(34,153,84);
push;
  scale(windowWidth/1200);
  scale(1,0);
  translate(0,100);
beginShape(); //water/oil
  vertex(20,257);
  bezierVertex(17,412,173,498,220,326);
  bezierVertex(233,406,368,645,429,310);
  bezierVertex(308,253,517,638,651,364);
  bezierVertex(723,653,954,421,909,254);
  bezierVertex(771,510,1136,552,1139,260);
  bezierVertex(684,96,803,434,251,197);
  bezierVertex(191,192,175,170,85,214);
  vertex(20,257);
endShape();
pop;
  
//water/oil
noStroke();
fill("blue");
push;
  scale(windowWidth/1200);
  translate(0,100);
beginShape(); //water/oil
  vertex(20,257);
  bezierVertex(17,412,173,498,220,326);
  bezierVertex(233,406,368,645,429,310);
  bezierVertex(308,253,517,638,651,364);
  bezierVertex(723,653,954,421,909,254);
  bezierVertex(771,510,1136,552,1139,260);
  bezierVertex(684,96,803,434,251,197);
  bezierVertex(191,192,175,170,85,214);
  vertex(20,257);
endShape();
pop;
  
}*/
