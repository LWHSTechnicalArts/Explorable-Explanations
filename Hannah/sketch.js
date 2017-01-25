var button1, button2, button3, button4, button5, button6, button7, button8, button9, button10;
var selectreaction1, selectreaction2, selectreaction3, selectreaction4, selectreaction5, selectreaction6, selectreaction7, selectreaction8, selectreaction9, selectreaction10;
var title = "";
var number1 = "";
var number2 = "";
var number3 = "";
var number4 = "";
var number5 = "";
var number6 = "";
var number7 = "";
var number8 = "";
var number9 = "";
var number10 = "";
var txt, txt1, txt2, txt3, txt4, txt5, txt6, txt7, txt8, txt9, txt10, txt11
var hidebutton;
var showNumbers = true;
var showImage1, showImage2, showImage3, showImage4, showImage5, showImage6, showImage7, showImage8, showImage9, showImage10 = false;
var downloadstatsimg;
var showNewStuff = false;

function preload() {
  mySound1 = loadSound("Music/Fifth Symphony - Beethoven.mp3"); //CLASSICAL
  mySound1img = loadImage("Images/Classical.jpg");
  mySound2 = loadSound("Music/Alessia Cara - Scars To Your Beautiful (Audio) (192  kbps).mp3"); //POP
  mySound2img = loadImage("Images/AlessiaCara.jpg");
  mySound3 = loadSound("Music/Heathens.mp3"); //ROCK
  mySound3img = loadImage("Images/Heathens.jpg");
  mySound4 = loadSound("Music/La Bicicleta.mp3"); //LATIN
  mySound4img = loadImage("Images/labicicleta.jpg");
  mySound5 = loadSound("Music/03 Closer.mp3"); //R&B/HIP HOP
  mySound5img = loadImage("Images/closer.png");
  mySound6 = loadSound("Music/Carrie Underwood.mp3"); //COUNTRY
  mySound6img = loadImage("Images/CarrieUnderwood.jpg");
  mySound7 = loadSound("Music/Faded [Www.Takseda.NeT].mp3"); //EDM
  mySound7img = loadImage("Images/Faded.jpg");
  mySound8 = loadSound("Music/God Rest Ye Merry Gentlemen.mp3"); //CHRISTMAS SONG (SEASONAL)
  mySound8img = loadImage("Images/Pentatonix.gif");
  mySound9 = loadSound("Music/Made A Way - Travis Greene.mp3") //CHRISTIAN/GOSPEL
  mySound9img = loadImage("Images/TravisGreene.jpg");
  mySound10 = loadSound("Music/Cant Stop The Feeling _ Vevomack.com.mp3") //Children's Music: From the Movie Trolls
  mySound10img = loadImage("Images/Trolls.jpg");
  downloadstatsimg = loadImage("Images/Overall-CDs+vinyl+downloads+streaming.png"); //download statistics in America
  cdsalesimg = loadImage("Images/genre_breakdown_2015_2.png"); //CD sales statistics in America
}

function loadsound1() {
  if (!mySound1.isPlaying()) {
    mySound1.setVolume(0.1);
    mySound1.play();
    button1.html("Pause Music #1");
    showImage1 = true;
  } else {
    mySound1.pause();
    button1.html("Play Music #1");
    showImage = false;
  }
}

function loadsound2() {
  if (!mySound2.isPlaying()) {
    mySound2.setVolume(0.1);
    mySound2.play();
    button2.html("Pause Music #2");
    showImage2 = true;
  } else {
    mySound2.pause();
    button2.html("Play Music #2");
    showImage2 = false;
  }
}

function loadsound3() {
  if (!mySound3.isPlaying()) {
    mySound3.setVolume(0.1);
    mySound3.play();
    button3.html("Pause Music #3");
    showImage3 = true;
  } else {
    mySound3.pause();
    button3.html("Play Music #3");
    showImage3 = false;
  }
}

function loadsound4() {
 if (!mySound4.isPlaying()) {
    mySound4.setVolume(0.1);
    mySound4.play();
    button4.html("Pause Music #4");
    showImage4 = true;
  } else {
    mySound4.pause();
    button4.html("Play Music #4");
    showImage4 = false;
  }
}

function loadsound5() {
  if (!mySound5.isPlaying()) {
    mySound5.setVolume(0.1);
    mySound5.play();
    button5.html("Pause Music #5");
    showImage5 = true;
  } else {
    mySound5.pause();
    button5.html("Play Music #5");
    showImage5 = false;
  }
}

function loadsound6() {
 if (!mySound6.isPlaying()) {
    mySound6.setVolume(0.1);
    mySound6.play();
    button6.html("Pause Music #6");
    showImage6 = true;
  } else {
    mySound6.pause();
    button6.html("Play Music #6");
    showImage6 = false;
  }
}

function loadsound7() {
  if (!mySound7.isPlaying()) {
    mySound7.setVolume(0.1);
    mySound7.play();
    button7.html("Pause Music #7");
    showImage7 = true;
  } else {
    mySound7.pause();
    button7.html("Play Music #7");
    showImage7 = false;
  }
}

function loadsound8() {
  if (!mySound8.isPlaying()) {
    mySound8.setVolume(0.1);
    mySound8.play();
    button8.html("Pause Music #8");
    showImage8 = true;
  } else {
    mySound8.pause();
    button8.html("Play Music #8");
    showImage8 = false;
  }
}

function loadsound9() {
  if (!mySound9.isPlaying()) {
    mySound9.setVolume(0.1);
    mySound9.play();
    button9.html("Pause Music #9");
    showImage9 = true;
  } else {
    mySound9.pause();
    button9.html("Play Music #9");
    showImage9 = false;
  }
}

function loadsound10() {
  if (!mySound10.isPlaying()) {
    mySound10.setVolume(0.1);
    mySound10.play();
    button10.html("Pause Music #10");
    showImage10 = true;
  } else {
    mySound10.pause();
    button10.html("Play Music #10");
    showImage10 = false;
  }
}


function setup() {
  createCanvas(700, 1400);

  title = "How Well Do You Know Music?";

  number1 = "1.";
  //First question/music (classical)
  button1 = createButton("Play Music #1");
  button1.position(10, 100);
  button1.mousePressed(loadsound1);

  // feelings/reactions to first music and will be the same options for all music genres.
  selectreaction1 = createSelect();
  selectreaction1.position(10, 130);
  selectreaction1.option('Select Your Reaction');
  selectreaction1.option('I love it! I could listen to it all day!');
  selectreaction1.option('I somewhat like it.');
  selectreaction1.option('I am neutral/indifferent to the music.');
  selectreaction1.option('I dislike it.');
  selectreaction1.option('I hate/bothers me so much!');
  selectreaction1.changed(reactionforMusic1);

  txt1 = createP(""); //the text for the response to the reactions for music from txt1-txt10
  txt2 = createP("");
  txt3 = createP("");
  txt4 = createP("");
  txt5 = createP("");
  txt6 = createP("");
  txt7 = createP("");
  txt8 = createP("");
  txt9 = createP("");
  txt10 = createP(""); 
  txt11 = createP(""); //the text for the statistics explanation: paragraph 1
  txt12 = createP(""); //the text for the statistics explanation: paragraph 2

  number2 = "2."

  //Second question/music (rap)
  button2 = createButton("Play Music #2");
  button2.position(10, 220);
  button2.mousePressed(loadsound2);

  selectreaction2 = createSelect();
  selectreaction2.position(10, 250);
  selectreaction2.option('Select Your Reaction');
  selectreaction2.option('I love it! I could listen to it all day!');
  selectreaction2.option('I somewhat like it.');
  selectreaction2.option('I am neutral/indifferent to the music.');
  selectreaction2.option('I dislike it.');
  selectreaction2.option('I hate/bothers me so much!');
  selectreaction2.changed(reactionforMusic2);

  number3 = "3."

  //Third question/music (rock)
  button3 = createButton("Play Music #3");
  button3.position(10, 340);
  button3.mousePressed(loadsound3);

  selectreaction3 = createSelect();
  selectreaction3.position(10, 370);
  selectreaction3.option('Select Your Reaction');
  selectreaction3.option('I love it! I could listen to it all day!');
  selectreaction3.option('I somewhat like it.');
  selectreaction3.option('I am neutral/indifferent to the music.');
  selectreaction3.option('I dislike it.');
  selectreaction3.option('I hate/bothers me so much!');
  selectreaction3.changed(reactionforMusic3);

  number4 = "4."

  //Fourth question/music (latin)
  button4 = createButton("Play Music #4");
  button4.position(10, 460);
  button4.mousePressed(loadsound4);

  selectreaction4 = createSelect();
  selectreaction4.position(10, 490);
  selectreaction4.option('Select Your Reaction');
  selectreaction4.option('I love it! I could listen to it all day!');
  selectreaction4.option('I somewhat like it.');
  selectreaction4.option('I am neutral/indifferent to the music.');
  selectreaction4.option('I dislike it.');
  selectreaction4.option('I hate/bothers me so much!');
  selectreaction4.changed(reactionforMusic4);

  number5 = "5."

  //Fifth question/music (hip hop)
  button5 = createButton("Play Music #5");
  button5.position(10, 580);
  button5.mousePressed(loadsound5);

  selectreaction5 = createSelect();
  selectreaction5.position(10, 610);
  selectreaction5.option('Select Your Reaction');
  selectreaction5.option('I love it! I could listen to it all day!');
  selectreaction5.option('I somewhat like it.');
  selectreaction5.option('I am neutral/indifferent to the music.');
  selectreaction5.option('I dislike it.');
  selectreaction5.option('I hate/bothers me so much!');
  selectreaction5.changed(reactionforMusic5);

  number6 = "6."

  //Sixth question/music (country)
  button6 = createButton("Play Music #6");
  button6.position(10, 700);
  button6.mousePressed(loadsound6);

  selectreaction6 = createSelect();
  selectreaction6.position(10, 730);
  selectreaction6.option('Select Your Reaction');
  selectreaction6.option('I love it! I could listen to it all day!');
  selectreaction6.option('I somewhat like it.');
  selectreaction6.option('I am neutral/indifferent to the music.');
  selectreaction6.option('I dislike it.');
  selectreaction6.option('I hate/bothers me so much!');
  selectreaction6.changed(reactionforMusic6);

  number7 = "7."

  //Seventh question/music (edm)
  button7 = createButton("Play Music #7");
  button7.position(10, 820);
  button7.mousePressed(loadsound7);

  selectreaction7 = createSelect();
  selectreaction7.position(10, 850);
  selectreaction7.option('Select Your Reaction');
  selectreaction7.option('I love it! I could listen to it all day!');
  selectreaction7.option('I somewhat like it.');
  selectreaction7.option('I am neutral/indifferent to the music.');
  selectreaction7.option('I dislike it.');
  selectreaction7.option('I hate/bothers me so much!');
  selectreaction7.changed(reactionforMusic7);

  number8 = "8."

  //Eighth question/music (christmas song)
  button8 = createButton("Play Music #8");
  button8.position(10, 940);
  button8.mousePressed(loadsound8);

  selectreaction8 = createSelect();
  selectreaction8.position(10, 970);
  selectreaction8.option('Select Your Reaction');
  selectreaction8.option('I love it! I could listen to it all day!');
  selectreaction8.option('I somewhat like it.');
  selectreaction8.option('I am neutral/indifferent to the music.');
  selectreaction8.option('I dislike it.');
  selectreaction8.option('I hate/bothers me so much!');
  selectreaction8.changed(reactionforMusic8);

  number9 = "9."

  //Ninth question/music (gospel)
  button9 = createButton("Play Music #9");
  button9.position(10, 1060);
  button9.mousePressed(loadsound9);

  selectreaction9 = createSelect();
  selectreaction9.position(10, 1090);
  selectreaction9.option('Select Your Reaction');
  selectreaction9.option('I love it! I could listen to it all day!');
  selectreaction9.option('I somewhat like it.');
  selectreaction9.option('I am neutral/indifferent to the music.');
  selectreaction9.option('I dislike it.');
  selectreaction9.option('I hate/bothers me so much!');
  selectreaction9.changed(reactionforMusic9);

  number10 = "10."

  //Tenth question/music (children's music)
  button10 = createButton("Play Music #10");
  button10.position(10, 1180);
  button10.mousePressed(loadsound10);

  selectreaction10 = createSelect();
  selectreaction10.position(10, 1210);
  selectreaction10.option('Select Your Reaction');
  selectreaction10.option('I love it! I could listen to it all day!');
  selectreaction10.option('I somewhat like it.');
  selectreaction10.option('I am neutral/indifferent to the music.');
  selectreaction10.option('I dislike it.');
  selectreaction10.option('I hate/bothers me so much!');
  selectreaction10.changed(reactionforMusic10);


  //button to go to "next page" by hiding everything 
  hidebutton = createButton("Let's See Statistics!");
  hidebutton.position(10, 1350);
  hidebutton.size(150, 20);
  hidebutton.mousePressed(hideAllandAdd);

}

function draw() {
  background(195, 0, 125);
  displayText(title);
  button1.mousePressed(loadsound1)
  if (showNumbers) {
    displayQuestionNum(number1, 90);
    displayQuestionNum(number2, 210);
    displayQuestionNum(number3, 330);
    displayQuestionNum(number4, 450);
    displayQuestionNum(number5, 570);
    displayQuestionNum(number6, 690);
    displayQuestionNum(number7, 810);
    displayQuestionNum(number8, 930);
    displayQuestionNum(number9, 1050);
    displayQuestionNum(number10, 1170);
  }
  
  //when the play button for song one is pressed, the picture realting the song can be seen, and so on for all the songs.
  if (showImage1) {
    image(mySound1img, 300, 80, 300, 300);
  }
  
  if (showImage2) {
    image(mySound2img, 300, 180, 300, 300);
  }
  
  if (showImage3) {
    image(mySound3img, 300, 280, 300, 300);
  }
  
  if (showImage4) {
    image(mySound4img, 300, 380, 300, 300);
  }
  
  if (showImage5) {
    image(mySound5img, 300, 480, 300, 300);
  }
  
  if (showImage6) {
    image(mySound6img, 300, 580, 300, 300);
  }
  
  if (showImage7) {
    image(mySound7img, 300, 680, 300, 300);
  }
  
  if (showImage8) {
    image(mySound8img, 300, 780, 300, 300);
  }
  
  if (showImage9) {
    image(mySound9img, 300, 880, 300, 300);
  }
  
  if (showImage10) {
    image(mySound10img, 300, 980, 300, 300);
  }
  

  if (showNewStuff) {
    image(downloadstatsimg, 10, 50, 400, 400);
    txt11.html("These are the overall American statistics of the popularity of the CDs, downloads, and streaming. Here’s a breakdown of music genres from Nielsen Music, which compiled every sale across CDs, vinyl, digital downloads, and streaming to calculate which types of music are most popular.");
    txt11.position(10, 450);
    txt11.style("font-style", "ITALIC");
    txt11.style("color", "white");
    image(cdsalesimg, 10, 550, 400, 400);
    txt12.html("These are the overall American statistics of just CD sale popularity. Perhaps unsurprisingly, older formats lean towards older music genres.  And, Rock certainly pre-dates Rap/Hip-Hop, though its origins are equally controversial and generation-defining.  Incidentally, Rock tends to dominate vinyl sales, where formats like Rap/Hip-Hop don’t do so well (and, sales of EDM are almost nonexistent).As for CD sales, shiny discs are still sold in the billions, though their buyers are typically older (and less interested in iTunes downloads or Spotify streams)")
    txt12.position(10, 950);
    txt12.style("font-style", "ITALIC");
    txt12.style("color", "white");
  }
}

//function for the title
function displayText(t) {
  textAlign(CENTER, 0);
  textSize(20);
  textFont("Zapfino");
  fill("#0000000");
  text(t, width / 2, 35);
}

//function for the question number
function displayQuestionNum(t, y) {
  textSize(10);
  textFont("Zapfino");
  fill("#0000000");
  text(t, 9, y);
}

//function to hide everything so that when the button is pressed, it seems like there is a new page
function hideAllandAdd() {
  button1.hide();
  button2.hide();
  button3.hide();
  button4.hide();
  button5.hide();
  button6.hide();
  button7.hide();
  button8.hide();
  button9.hide();
  button10.hide();
  selectreaction1.hide();
  selectreaction2.hide();
  selectreaction3.hide();
  selectreaction4.hide();
  selectreaction5.hide();
  selectreaction6.hide();
  selectreaction7.hide();
  selectreaction8.hide();
  selectreaction9.hide();
  selectreaction10.hide();
  showNumbers = false;
  hidebutton.hide();
  showNewStuff = true;
}



//function for the reaction to MUSIC #1 (CLASSICAL) leading to America's generalized statistics (but no numbers) to a specific music
function reactionforMusic1() {
  console.log(selectreaction1.value());
  if (selectreaction1.value() === "I love it! I could listen to it all day!") {
    txt1.html("Surprisingly, you are among few Americans who appreciate and enjoy classical music in the 21st century!");
    txt1.position(10, 140);
    txt1.style("font-style", "ITALIC");
    txt1.style("color", "white");
  } else if (selectreaction1.value() === "I somewhat like it.") {
    txt1.html('Surprisingly, you are among few Americans who enjoy classical music in the 21st century!')
    txt1.position(10, 140);
    txt1.style("font-style", "ITALIC");
    txt1.style("color", "white");
  } else if (selectreaction1.value() === "I am neutral/indifferent to the music.") {
    txt1.html('Coincidentally, you are among the majority of Americans who are not a big fan of/indifferent to classical music.')
    txt1.position(10, 140);
    txt1.style("font-style", "ITALIC");
    txt1.style("color", "white");
  } else if (selectreaction1.value() === "I dislike it.") {
    txt1.html('Coincidentally, you are among a great handful Americans who do not enjoy classical music.')
    txt1.position(10, 140);
    txt1.style("font-style", "ITALIC");
    txt1.style("color", "white");
  } else if (selectreaction1.value() === "I hate/bothers me so much!") {
    txt1.html('Coincidentally, you are among the greatest majority of Americans who do not like classical music at all.')
    txt1.position(10, 140);
    txt1.style("font-style", "ITALIC");
    txt1.style("color", "white");
  }
}

//function for the reaction to Music #2 (POP) 
function reactionforMusic2() {
  console.log(selectreaction2.value());
  if (selectreaction2.value() === "I love it! I could listen to it all day!") {
    txt2.html("You are coincidentally among quite a few Americans who are a great fan of pop music!");
    txt2.position(10, 260);
    txt2.style("font-style", "ITALIC");
    txt2.style("color", "white");
  } else if (selectreaction2.value() === "I somewhat like it.") {
    txt2.html('Like a handful of Americans, you enjoy pop music.')
    txt2.position(10, 260);
    txt2.style("font-style", "ITALIC");
    txt2.style("color", "white");
  } else if (selectreaction2.value() === "I am neutral/indifferent to the music.") {
    txt2.html('Coincidentally, you are among a lot of Americans who are not a big fan of pop music.')
    txt2.position(10, 260);
    txt2.style("font-style", "ITALIC");
    txt2.style("color", "white");
  } else if (selectreaction2.value() === "I dislike it.") {
    txt2.html('Coincidentally, you are among the greater majority of Americans who do not enjoy pop music.')
    txt2.position(10, 260);
    txt2.style("font-style", "ITALIC");
    txt2.style("color", "white");
  } else if (selectreaction2.value() === "I hate/bothers me so much!") {
    txt2.html('Coincidentally, you are among the many Americans who do not like pop music at all.')
    txt2.position(10, 260);
    txt2.style("font-style", "ITALIC");
    txt2.style("color", "white");
  }
}

//function for the reaction to Music #3 (ROCK)
function reactionforMusic3() {
  console.log(selectreaction3.value());
  if (selectreaction3.value() === "I love it! I could listen to it all day!") {
    txt3.html("You are coincidentally among the majority (even though it is less than half) of Americans who are a huge fan of rock music! Rock music is the most popular genre as of 2015 and 2016!!");
    txt3.position(10, 380);
    txt3.style("font-style", "ITALIC");
    txt3.style("color", "white");
  } else if (selectreaction3.value() === "I somewhat like it.") {
    txt3.html('Like many Americans, you enjoy rock music eventhough it is not your favorite.')
    txt3.position(10, 380);
    txt3.style("font-style", "ITALIC");
    txt3.style("color", "white");
  } else if (selectreaction3.value() === "I am neutral/indifferent to the music.") {
    txt3.html('Coincidentally, you are among quite a few Americans who are not a big fan of rock music.')
    txt3.position(10, 380);
    txt3.style("font-style", "ITALIC");
    txt3.style("color", "white");
  } else if (selectreaction3.value() === "I dislike it.") {
    txt3.html('Although you are among a greater majority of Americans who do not enjoy rock music than who do not, but it does not change the popularity of this genre.')
    txt3.position(10, 380);
    txt3.style("font-style", "ITALIC");
    txt3.style("color", "white");
  } else if (selectreaction3.value() === "I hate/bothers me so much!") {
    txt3.html('Coincidentally, you are among many Americans who do not like rock music at all.')
    txt3.position(10, 380);
    txt3.style("font-style", "ITALIC");
    txt3.style("color", "white");
  }
}

//function for the reaction to Music #4 (LATIN)
function reactionforMusic4() {
  console.log(selectreaction4.value());
  if (selectreaction4.value() === "I love it! I could listen to it all day!") {
    txt4.html("Although Latin music is very nice and you really enjoy it, majority of Americans disagree with you!");
    txt4.position(10, 500);
    txt4.style("font-style", "ITALIC");
    txt4.style("color", "white");
  } else if (selectreaction4.value() === "I somewhat like it.") {
    txt4.html('You are among a small chunk of Americans who like Latin music.')
    txt4.position(10, 500);
    txt4.style("font-style", "ITALIC");
    txt4.style("color", "white");
  } else if (selectreaction4.value() === "I am neutral/indifferent to the music.") {
    txt4.html('You are coincidentally among many Americans who are not a big fan of Latin music.')
    txt4.position(10, 500);
    txt4.style("font-style", "ITALIC");
    txt4.style("color", "white");
  } else if (selectreaction4.value() === "I dislike it.") {
    txt4.html('You are among the greatest majority of Americans who do not enjoy Latin music.')
    txt4.position(10, 500);
    txt4.style("font-style", "ITALIC");
    txt4.style("color", "white");
  } else if (selectreaction4.value() === "I hate/bothers me so much!") {
    txt4.html('Like the majority of many Americans, you do not enjoy Latin music.')
    txt4.position(10, 500);
    txt4.style("font-style", "ITALIC");
    txt4.style("color", "white");
  }
}

//function for the reaction to Music #5 (HIP-HOP)
function reactionforMusic5() {
  console.log(selectreaction5.value());
  if (selectreaction5.value() === "I love it! I could listen to it all day!") {
    txt5.html("It's great that you really enjoy R&B/Hip Hop music; a chunkful of Americans would agree with you!");
    txt5.position(10, 620);
    txt5.style("font-style", "ITALIC");
    txt5.style("color", "white");
  } else if (selectreaction5.value() === "I somewhat like it.") {
    txt5.html('You are among a sufficient chunk of Americans who like R&B/Hip-Hop music.')
    txt5.position(10, 620);
    txt5.style("font-style", "ITALIC");
    txt5.style("color", "white");
  } else if (selectreaction5.value() === "I am neutral/indifferent to the music.") {
    txt5.html('You are coincidentally among the many Americans who are not a big fan of R&B/Hip-Hop music.')
    txt5.position(10, 620);
    txt5.style("font-style", "ITALIC");
    txt5.style("color", "white");
  } else if (selectreaction5.value() === "I dislike it.") {
    txt5.html('You are among the greater majority of Americans who do not enjoy R&B/Hip-Hop music.')
    txt5.position(10, 620);
    txt5.style("font-style", "ITALIC");
    txt5.style("color", "white");
  } else if (selectreaction5.value() === "I hate/bothers me so much!") {
    txt5.html('Like millions of Americans, you do not enjoy R&B/Hip-Hop music.')
    txt5.position(10, 620);
    txt5.style("font-style", "ITALIC");
    txt5.style("color", "white");
  }
}

//function for the reaction to Music #6 (COUNTRY)
function reactionforMusic6() {
  console.log(selectreaction6.value());
  if (selectreaction6.value() === "I love it! I could listen to it all day!") {
    txt6.html("Country music is rising its populatirty in America,but you enjoy Country music like a fraction of Americans!");
    txt6.position(10, 740);
    txt6.style("font-style", "ITALIC");
    txt6.style("color", "white");
  } else if (selectreaction6.value() === "I somewhat like it.") {
    txt6.html('You are among a increasing handful of Americans who like Country music.')
    txt6.position(10, 740);
    txt6.style("font-style", "ITALIC");
    txt6.style("color", "white");
  } else if (selectreaction6.value() === "I am neutral/indifferent to the music.") {
    txt6.html('Like many Americans, you do not really care about Country music: sometimes it sounds nice and other times it is okay.')
    txt6.position(10, 740);
    txt6.style("font-style", "ITALIC");
    txt6.style("color", "white");
  } else if (selectreaction6.value() === "I dislike it.") {
    txt6.html('You are among the greater fraction of Americans who do not consider Country music as good music.')
    txt6.position(10, 740);
    txt6.style("font-style", "ITALIC");
    txt6.style("color", "white");
  } else if (selectreaction6.value() === "I hate/bothers me so much!") {
    txt6.html('Like the majority of many Americans, you just cannot stand Country music.')
    txt6.position(10, 740);
    txt6.style("font-style", "ITALIC");
    txt6.style("color", "white");
  }
}

//function for the reaction to Music #7 (EDM:ELECTRONIC DANCE MUSIC)
function reactionforMusic7() {
  console.log(selectreaction7.value());
  if (selectreaction7.value() === "I love it! I could listen to it all day!") {
    txt7.html("EDM (Electronic Dance Music) is great music and you love it, but the majority of Americans would disagree with you greatly!");
    txt7.position(10, 860);
    txt7.style("font-style", "ITALIC");
    txt7.style("color", "white");
  } else if (selectreaction7.value() === "I somewhat like it.") {
    txt7.html('You are among a small fraction of Americans who like EDM (Electronic Dance Music) music.')
    txt7.position(10, 860);
    txt7.style("font-style", "ITALIC");
    txt7.style("color", "white");
  } else if (selectreaction7.value() === "I am neutral/indifferent to the music.") {
    txt7.html('Coincidentally, you are among many Americans who do not really appreciate EDM (Electronic Dance Music)')
    txt7.position(10, 860);
    txt7.style("font-style", "ITALIC");
    txt7.style("color", "white");
  } else if (selectreaction7.value() === "I dislike it.") {
    txt7.html('You are among the greatest majority of Americans who do not enjoy EDM (Electronic Dance Music) music.')
    txt7.position(10, 860);
    txt7.style("font-style", "ITALIC");
    txt7.style("color", "white");
  } else if (selectreaction7.value() === "I hate/bothers me so much!") {
    txt7.html('Like millions and millions of many Americans, you do not want to listen to EDM (Electronic Dance Music).')
    txt7.position(10, 860);
    txt7.style("font-style", "ITALIC");
    txt7.style("color", "white");
  }
}

//function for the reaction to Music #8 (CHRISTMAS SONG--->SEASONAL)
function reactionforMusic8() {
  console.log(selectreaction8.value());
  if (selectreaction8.value() === "I love it! I could listen to it all day!") {
    txt8.html("Surprisingly, you are among a very tiny fraction of Americans who enjoy Seasonal music, in this case Christmas music!");
    txt8.position(10, 980);
    txt8.style("font-style", "ITALIC");
    txt8.style("color", "white");
  } else if (selectreaction8.value() === "I somewhat like it.") {
    txt8.html('You are among a tiny chunk of Americans who like Seasonal Music (Christmas) music.')
    txt8.position(10, 980);
    txt8.style("font-style", "ITALIC");
    txt8.style("color", "white");
  } else if (selectreaction8.value() === "I am neutral/indifferent to the music.") {
    txt8.html('You are coincidentally among pretty much all Americans who are not a big fan of Seasonal (Christmas) music.')
    txt8.position(10, 980);
    txt8.style("font-style", "ITALIC");
    txt8.style("color", "white");
  } else if (selectreaction8.value() === "I dislike it.") {
    txt8.html('You are among the greater number of Americans who do not enjoy Seasonal (Christmas) music.')
    txt8.position(10, 980);
    txt8.style("font-style", "ITALIC");
    txt8.style("color", "white");
  } else if (selectreaction8.value() === "I hate/bothers me so much!") {
    txt8.html('Like the most of the Americans, you do not enjoy listening to Seasonal (Christmas) music.')
    txt8.position(10, 980);
    txt8.style("font-style", "ITALIC");
    txt8.style("color", "white");
  }
}

//function for the reaction to Music #9 (GOSPEL)
function reactionforMusic9() {
  console.log(selectreaction9.value());
  if (selectreaction8.value() === "I love it! I could listen to it all day!") {
    txt9.html("Although Christian/Gospel music is very nice and relaxing, most Americans would contradict with you! However the most important thing is that you enjoy it!");
    txt9.position(10, 1100);
    txt9.style("font-style", "ITALIC");
    txt9.style("color", "white");
  } else if (selectreaction9.value() === "I somewhat like it.") {
    txt9.html('You are among a quite small number of Americans who like Christian/Gospel music.')
    txt9.position(10, 1100);
    txt9.style("font-style", "ITALIC");
    txt9.style("color", "white");
  } else if (selectreaction9.value() === "I am neutral/indifferent to the music.") {
    txt9.html('You are similarly among the majority of Americans who are not really interested in Christian/Gospel music.')
    txt9.position(10, 1100);
    txt9.style("font-style", "ITALIC");
    txt9.style("color", "white");
  } else if (selectreaction9.value() === "I dislike it.") {
    txt9.html('You are among the greatest majority of Americans who do not enjoy really Christian/Gospel music.')
    txt9.position(10, 1100);
    txt9.style("font-style", "ITALIC");
    txt9.style("color", "white");
  } else if (selectreaction9.value() === "I hate/bothers me so much!") {
    txt9.html('Millions of Americans would agree with you that they do not enjoy listening to Christian/Gospel music.')
    txt9.position(10, 1100);
    txt9.style("font-style", "ITALIC");
    txt9.style("color", "white");
  }
}

//function for the reaction to Music #10 (CHILDREN"S MUSIC)
function reactionforMusic10() {
  console.log(selectreaction10.value());
  if (selectreaction10.value() === "I love it! I could listen to it all day!") {
    txt10.html("Children's music is great to hear, but it is one of the least popular genre in America! By the way this song is from the children's movie, Trolls.");
    txt10.position(10, 1220);
    txt10.style("font-style", "ITALIC");
    txt10.style("color", "white");
  } else if (selectreaction10.value() === "I somewhat like it.") {
    txt10.html("Like a tiny fraction of Americans,it gives yu pleasure to listen to children's music.")
    txt10.position(10, 1220);
    txt10.style("font-style", "ITALIC");
    txt10.style("color", "white");
  } else if (selectreaction10.value() === "I am neutral/indifferent to the music.") {
    txt10.html("You are coincidentally among a great number of Americans who are not a big fan of children's music.")
    txt10.position(10, 1220);
    txt10.style("font-style", "ITALIC");
    txt10.style("color", "white");
  } else if (selectreaction10.value() === "I dislike it.") {
    txt10.html("You are among the millions and millions of Americans who do not enjoy children's music.")
    txt10.position(10, 1220);
    txt10.style("font-style", "ITALIC");
    txt10.style("color", "white");
  } else if (selectreaction10.value() === "I hate/bothers me so much!") {
    txt10.html("Like the majority of many Americans (millions and millions of them), you do not enjoy children's music.")
    txt10.position(10, 1220);
    txt10.style("font-style", "ITALIC");
    txt10.style("color", "white");
  }
}