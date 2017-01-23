  var img;
  var canvas;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  s = "WHAT WOULD BE GAINED?";
  t = "WHAT IS AT STAKE?"
  b = '"The Dakota Access Pipeline Project is a new underground crude oil pipeline designed to transport 470,000 barrels of crude oil per day (with a growth potential up to 570,000 barrels per day) from the Bakken/Three Forks formations in North Dakota to a terminus near Patoka, Illinois. The project will require the construction of approximately 1,172 miles of 12-inch to 30-inch diameter pipeline through the states of North Dakota, South Dakota, Iowa and Illinois terminating near Patoka, Illinois. The project is supported by long-term binding contractual commitments from shippers and anticipates that the new pipeline and its related facilities will be ready for service in late 2016, pending regulatory approvals."- Energy Transfer, partners of the Dakota Access, LLC “DAPL”' 
  x = "What is the purpose?"
  x1 = "The purpose of the Dakota Access Project is to safely transport U.S. crude oil from the Bakken/Three Forks formations in North Dakota to a terminus near Patoka, Illinois to support U.S. consumers’ energy needs, and reduce the amount of crude oil shipped by truck and by rail."
  x2 = "Safety"
  x3 = "According to the U.S. Department of Transportation, pipelines are statistically the safest and most reliable mode of transporting crude, DAPL will improve safety to the public and environment and free up rail capacity for the transportation of crops and other commodities currently constrained by crude oil cargos. Crude oil pipelines are monitored 24/7, including rigorous pipeline integrity planning and maintenance."
  x4 = "APL Pipeline History"
  x5 = "Energy Transfer, and its combined affiliates, is the largest pipeline company in the U.S. by annual volume transported and the second largest U.S. pipeline company measured by infrastructure. Energy Transfer and its various pipelines have provided transportation services since the early 1900s through an extensive network of underground pipelines. "
  x6 = "Benefit Local Communities"
  x7 = "The pipeline will increase America’s energy independence. The pipeline is a means to transport 100% domestic produced crude oil to support U.S. consumers’ energy demand, working to be truly independent of foreign crude oil imports. Also, during the construction, goods and services will be procured from local businesses along the entire route, generating income tax revenues."
  x8 = "http://www.daplpipelinefacts.com/resources/faq.html"
  y = "What could go wrong?"
  y1 = "Iowa farmers are afraid that the contruction of the Dakota Pipeline will affect the farmers abilities to grow plants once Pipeline contruction moves the fertile topsoil and mixes it with the hard clay soil and clay loam found in lower layers of the soil. When the soil is mixed, it becomes less suitable for growing crops and much less valuable. Some farmers had been promised that the top soil would be removed and put back at the top once construction is over, but so far that has not been the case. Although Dakota Access is separating the rich topsoil from the soil beneath, it isn't being as careful with the next two layers, mixing the clay loam subsoil with the hard clay underneath. Many landowners have complained that not enough topsoil is being stripped and stockpiled, failing to complete the requirements call for removing up to 36 inches of topsoil on top of the pipeline ditchline and up to 12 inches from the adjacent easement area." 
  y2 = "http://www.desmoinesregister.com/story/money/business/2016/08/23/"
  yz = "dakota-access-pipeline-degrading-soil-farmers-complain/88945728/"
  y4 = "The pipeline requires 50ft of land across for a 30 inch steal pipe and the Dakota Pipline construction has the right of up to 150 feet (46 m) around the area. The pipeline is at least 4 ft underground from the top of the pipe or 2 feet (0.61 m) below any drain tiles, which means that it'll be tearing up the 5ft of top soil in all those surrounding areas needed for construction. "
  y6 = "http://www.nytimes.com/2016/11/02/us/standing-rock-front-lines.html?_r=0"
  
//link to page  
  myLink = createA("Pipeline Decay/index.html","See the effect of construction!")
  myLink.position((windowWidth/2)+30, 630, (windowWidth/2)-60, 50);
  
}

function preload() {
  img = loadImage("protestors.jpg")

var myLink;
  
}

function draw() {
//Background Image  
  image(img, 0, 0,windowWidth, windowHeight);
//background box left
  //noStroke();
  fill(153, 255, 204, 200)
  rect(20, 170, (windowWidth/2)-40, windowHeight-190);
//top box
  fill(153, 255, 204, 200)
  rect(20, 20, windowWidth-40, 130);
  fill(50);
  textSize(16);
  text(b,30, 25, windowWidth-60, 130); 
//title text and box left  
  fill("white");
  rect(40, 180, (windowWidth/2)-80, 25);
  fill(50);
  textFont("Charter Black");
  textSize(18);
  textAlign(CENTER,CENTER);
  text(s,40, 180, (windowWidth/2)-80, 25); //left
//background box right
  fill(153, 255,204,200)
  //rect(500, 20, (windowWidth/2)-20, windowHeight-40);
  rect((windowWidth/2), 170, (windowWidth/2)-20, windowHeight-190);
//title text and box right
  fill("white");
  rect((windowWidth/2)+20, 180,(windowWidth/2)-60, 25);
  fill(50);
  textAlign(CENTER,CENTER);
  text(t,(windowWidth/2)+20, 180, (windowWidth/2)-60, 25); //right
//left paragraph
  textAlign(LEFT,LEFT);
  fill(50);
  textSize(16);
  textStyle(BOLD);
  text(x,50, 195, (windowWidth/2)-80, 50); 
  textSize(13);
  textStyle(NORMAL);
  text(x1,50, 210, (windowWidth/2)-80,120); 
  textSize(16);
  textStyle(BOLD);
  text(x2,50, 297, (windowWidth/2)-80, 50); 
  textSize(13);
  textStyle(NORMAL);
  text(x3,50, 287, (windowWidth/2)-80, 200); 
  textSize(16);
  textStyle(BOLD);
  text(x4,50, 435, (windowWidth/2)-80, 50); 
  textSize(13);
  textStyle(NORMAL);
  text(x5,50, 468, (windowWidth/2)-80,100); 
  textSize(16);
  textStyle(BOLD);
  text(x6,50, 553, (windowWidth/2)-80, 50); 
  textSize(13);
  textStyle(NORMAL);
  text(x7,50, 535, (windowWidth/2)-80,200); 
  textAlign(CENTER,CENTER);
  textSize(10);
  text(x8,50, 678, (windowWidth/2)-80,30); 

//right paragraph
  textSize(16);
  textStyle(BOLD);
  textAlign(LEFT,LEFT);
  text(y,(windowWidth/2)+30, 195, (windowWidth/2)-60, 50);
  
  textSize(13);
  textStyle(NORMAL);
  text(y1,(windowWidth/2)+30, 200, (windowWidth/2)-60, 300);
  
  textAlign(CENTER,CENTER);
  textSize(10);
  text(y2,(windowWidth/2)+30, 449, (windowWidth/2)-60, 50); 
  text(yz,(windowWidth/2)+30, 459, (windowWidth/2)-60, 50); 
  
  textSize(13); 
  textAlign(LEFT,LEFT);
  textStyle(NORMAL);
  text(y4,(windowWidth/2)+30, 500, (windowWidth/2)-60, 95); 
  
  textAlign(CENTER,CENTER);
  textSize(10);
  text(y6,(windowWidth/2)+30, 580, (windowWidth/2)-60, 50); 
  

}