/*
Title: The Basics of Learning French
Imagined, Designed, and Programmed by: Abraham Corea Diaz
Date: 12-16-2016
Sources of ideas and techniques (title, author, URL):
 * Ms. Freed
 * "7: HTML / CSS / DOM - p5.js Tutorial", Daniel Shiffman, https://www.youtube.com/playlist?list=PLRqwX-V7Uu6bI1SlcCRfLH79HZrFAtBvX
 * "11: p5.js Sound Tutorial", Daniel Shiffman, https://www.youtube.com/playlist?list=PLRqwX-V7Uu6aFcVjlDAkkGIixw70s7jpW
 * "CSS Tutorial", http://www.w3schools.com/css/default.asp
*/

var FtoE;
var bonjour;
var pomme;
var fatigue;
var ecole;
var result;


function preload() {//makes sure audio is loaded before user can play them
	bonjour = loadSound("bonjour.mp3"); //sample french pronounciations
	pomme = loadSound("pomme.mp3");
	fatigue = loadSound("fatigue.mp3");
	ecole = loadSound("ecole.mp3")
}

function setup() {
	noCanvas();
	//French to English "Dictionary"
	FtoE = {}; //empty object
	FtoE['Il mange une pomme.'] = 'He eats an apple.';
	FtoE['Bonjour!'] = 'Hello!';
	FtoE['Je suis fatigué.'] = 'I am tired.'
	FtoE['Tu es sympathique.'] = 'You are nice.'
	FtoE["Nous allons à l'école."] = 'We go to school.';
	FtoE['Je dors.'] = 'I sleep.';
	FtoE['Je rentre à la maison.'] = 'I return home.';
	FtoE['Je'] = 'I; one of the 6 most common pronouns.';
	FtoE['mange'] = "eat; from the infinitive verb 'manger': 'to eat'.";
	FtoE['une'] = "a; one of the 3 indefinite articles: for feminine nouns.";
	FtoE['pomme'] = "apple; a feminine noun.";
	FtoE['Elle'] = "She; one of the 6 most common pronouns.";
	FtoE['est'] = "is [3rd Person Singular]; from the infinitive verb 'être': 'to be'.";
	FtoE['fatiguée'] = "tired; adjective for a feminine noun, an 'e' is added after the 'é'.";
	FtoE['Nous'] = "We; one of the 6 most common pronouns.";
	FtoE['sommes'] = "are [1st Person Plural]; from the infinitive verb 'être'.";
	FtoE['sympathiques'] = "nice; adjective for a plural noun, an 's' is added at the end.";
	FtoE['Ils'] = "They [masculine or group of masculine and feminine]; one of the 6 most common pronouns.";
	FtoE['vont'] = "go; from the infinitive verb 'aller': 'to go'.";
	FtoE['à'] = "to; a preposition.";
	FtoE["l'"] = "the; definite article contracts when the next word starts with a vowel.";
	FtoE['école'] = "school; a feminine noun.";

	//Whole Sentence Translations
	sen1 = createP('Bonjour!');
	trans1 = createP(' '); //empty paragraph to be replaced with translation
	sen1.mouseOver(translation.bind(null, sen1, trans1)); //fixes a problem with displaying text
	sen1.mouseOut(untranslation.bind(null, sen1, trans1));

	sen2 = createP('Il mange une pomme.');
	trans2 = createP(' ');
	sen2.mouseOver(translation.bind(null, sen2, trans2)); //hovering over causes style change and translation to be revealed
	sen2.mouseOut(untranslation.bind(null, sen2, trans2)); //moving mouse away reverts style and hides translation

	sen3 = createP('Je suis fatigué.');
	trans3 = createP(' ');
	sen3.mouseOver(translation.bind(null, sen3, trans3));
	sen3.mouseOut(untranslation.bind(null, sen3, trans3));

	sen4 = createP('Tu es sympathique.');
	trans4 = createP(' ');
	sen4.mouseOver(translation.bind(null, sen4, trans4));
	sen4.mouseOut(untranslation.bind(null, sen4, trans4));

	sen5 = createP("Nous allons à l'école.");
	trans5 = createP(' ');
	sen5.mouseOver(translation.bind(null, sen5, trans5));
	sen5.mouseOut(untranslation.bind(null, sen5, trans5));

	sen6 = createP('Je dors.');
	trans6 = createP(' ');
	sen6.mouseOver(translation.bind(null, sen6, trans6));
	sen6.mouseOut(untranslation.bind(null, sen6, trans6));

	sen7 = createP('Je rentre à la maison.');
	trans7 = createP(' ');
	sen7.mouseOver(translation.bind(null, sen7, trans7));
	sen7.mouseOut(untranslation.bind(null, sen7, trans7));

	var space0 = createP(" "); //space variables are empty paragraphs to improve layout

	//Individual Word Translations
	sen8 = createP('Now hover over individual words to learn their meanings!'); //section heading
	sen8.style('font-size', '25px');

	var space = createP(" ");

	var words1 = select("#words1"); //connects html element to js variable
	space.child('words1'); //helps with layout

	var word1 = select("#word1");
	var tran1 = createP(' ');
	word1.mouseOver(translation.bind(null, word1, tran1));
	word1.mouseOut(untranslation.bind(null, word1, tran1));

	var word2 = select("#word2");
	word2.mouseOver(translation.bind(null, word2, tran1));
	word2.mouseOut(untranslation.bind(null, word2, tran1));

	var word3 = select("#word3");
	word3.mouseOver(translation.bind(null, word3, tran1));
	word3.mouseOut(untranslation.bind(null, word3, tran1));

	var word4 = select("#word4");
	word4.mouseOver(translation.bind(null, word4, tran1));
	word4.mouseOut(untranslation.bind(null, word4, tran1));

	var space1 = createP(" ");
	var words2 = select("#words2")
	space1.child('words2');

	var word5 = select("#word5");
	var tran2 = createP(' ');
	word5.mouseOver(translation.bind(null, word5, tran2));
	word5.mouseOut(untranslation.bind(null, word5, tran2));

	var word6 = select("#word6");
	word6.mouseOver(translation.bind(null, word6, tran2));
	word6.mouseOut(untranslation.bind(null, word6, tran2));

	var word7 = select("#word7");
	word7.mouseOver(translation.bind(null, word7, tran2));
	word7.mouseOut(untranslation.bind(null, word7, tran2));

	var space2 = createP(' ');
	var words3 = ('#words3')
	space2.child('words3');

	var word8 = select("#word8");
	var tran3 = createP(' ');
	word8.mouseOver(translation.bind(null, word8, tran3));
	word8.mouseOut(untranslation.bind(null, word8, tran3));

	var word9 = select("#word9");
	word9.mouseOver(translation.bind(null, word9, tran3));
	word9.mouseOut(untranslation.bind(null, word9, tran3));

	var word10 = select("#word10");
	word10.mouseOver(translation.bind(null, word10, tran3));
	word10.mouseOut(untranslation.bind(null, word10, tran3));

	var space3 = createP(' ');
	var words4 = select('#words4')
	space3.child('words4');

	var word11 = select("#word11");
	var tran4 = createP(' ');
	word11.mouseOver(translation.bind(null, word11, tran4));
	word11.mouseOut(untranslation.bind(null, word11, tran4));

	var word12 = select("#word12");
	word12.mouseOver(translation.bind(null, word12, tran4));
	word12.mouseOut(untranslation.bind(null, word12, tran4));

	var word13 = select("#word13");
	word13.mouseOver(translation.bind(null, word13, tran4));
	word13.mouseOut(untranslation.bind(null, word13, tran4));

	var word14 = select("#word14");
	word14.mouseOver(translation.bind(null, word14, tran4));
	word14.mouseOut(untranslation.bind(null, word14, tran4));

	var word15 = select("#word15");
	word15.mouseOver(translation.bind(null, word15, tran4));
	word15.mouseOut(untranslation.bind(null, word15, tran4));

	var space4 = createP(' ');

	//Sound Clips: Pronounciation
	var pronounciation = createP('Time to learn pronounciation! Click the buttons to hear the spoken French.'); //section heading
	pronounciation.style('font-size', '25px');

	var button1 = createButton("Bonjour!"); //play button for sound
	buttonStyle(button1); //CSS style for the button in function below
	button1.mousePressed(play.bind(null, bonjour)); //plays french pronounciation clip when button is pressed

	var space5 = createP(" ");

	var button2 = createButton("Il mange une pomme.");
	buttonStyle(button2);
	button2.mousePressed(play.bind(null, pomme));

	var space6 = createP(' ');

	var button3 = createButton("Je suis fatigué.");
	buttonStyle(button3);
	button3.mousePressed(play.bind(null, fatigue));

	var space7 = createP(' ');

	var button4 = createButton("Nous allons à l'école.");
	buttonStyle(button4);
	button4.mousePressed(play.bind(null, ecole));

	//Quiz
	var quiztext = createP('Now test your knowledge! Translate the following words. Refer to the previous exercises if you need a hint.') //section heading
	quiztext.style('font-size', '25px');

	var quiz1 = createP('Bonjour');//creates quiz question
	var answer1 = createInput("Answer Here");//text field for user answer
	inputStyle(answer1);//CSS style for text field in function below
	var result1 = createP(' ');//empty paragraph to be replaced with results of user's answer
	answer1.changed(evaluate.bind(null, answer1, result1, "hello"));//displays results

	var quiz2 = createP('She');
	var answer2 = createInput("Answer Here");
	inputStyle(answer2);
	var result2 = createP(' ');
	answer2.changed(evaluate.bind(null, answer2, result2, "elle"));

	var quiz3 = createP('Mange');
	var answer3 = createInput("Answer Here");
	inputStyle(answer3);
	var result3 = createP(' ');
	answer3.changed(evaluate.bind(null, answer3, result3, "eat"));

	var quiz4 = createP('Une Pomme');
	var answer4 = createInput("Answer Here");
	inputStyle(answer4)
	var result4 = createP(' ');
	answer4.changed(evaluate.bind(null, answer4, result4, "an apple"));


	var quiz5 = createP('Nice [singular]');
	var answer5 = createInput("Answer Here");
	inputStyle(answer5);
	var result5 = createP(' ');
	answer5.changed(evaluate.bind(null, answer5, result5, "sympathique"));

	var closing = createP("Now that you have completed these introductory exercises, you hopefully have a better understanding of the French language and want to pursue more instruction on the path to fluency! Good Luck!");//closing statement
	closing.style('font-size', '25px');
}


function translation(paraFrom, paraTo) {//changes made to style and reveals translations according to FtoE object
	paraFrom.style('background-color', 'lightblue');
	paraFrom.style('font-size', '20px');
	paraTo.style('background-color', 'lightgreen');
	paraTo.style('font-size', '20px');
	paraTo.html(FtoE[paraFrom.html()]);
}

function untranslation(paraFrom, paraTo) {//reverts chages made in function translation()
	paraFrom.style('background-color', color(150, 202, 150));
	paraFrom.style('font-size', '16px');
	paraTo.style('background-color', color(150, 202, 150));
	paraTo.style('font-size', '16px');
	paraTo.html(' ');
}

function play(sound) {//plays pronounciation audio clips
	sound.play();
}

function buttonStyle(name) {//button CSS style
	name.style('background-color', color(72, 92, 96));
	name.style('padding', '15px');
	name.style('font-size', '20px');
	name.style('color', color(255, 255, 255));
	name.style('border-radius', '50%');
	name.style('border', '2px solid #10988a');
	name.style('width', '250px')
	name.style('outline', 'none');
}

function inputStyle(name) {//text field CSS style
	name.style('padding', '12px');
	name.style('border-radius', '8px');
	name.style('border', '2px solid #10988a');
	name.style('outline', 'none');
	name.style('resize', 'none');
	name.style('text-align', 'center');
	name.style('font-size', '12pt')
}

function evaluate(answer, result, right) {//evaluates and returns whether the user's answers are correct or not
	if (answer.value() === right) {
		result.html('Right!')
		result.style('color', color(0, 255, 0));
	} else {
		result.html('Try Again!');
		result.style('color', color(255, 0, 0));
	}
}


function draw() {

}