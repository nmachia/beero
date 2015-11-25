//item objects
function beeroItem(title, description, type, image){
	this.title = title;
	this.description = description;
	this.type = type;
	this.image  = image;
}

//randomize the question order
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


var score = 0;
var qCount = 0;
var questions = new Array();


questions.push(new beeroItem('CHERRY BUSEY','Cherry Busey is a Flanders-style Oud Bruin Ale produced using a complex cocktail of wild yeasts and aged in a bevy of barrels. A multitude of Montmorency cherries were lovingly liberated to give the beer its tart cherry tang.','beer'));
questions.push(new beeroItem('PINNER','This drinkable IPA uses several varieties of hops to target the ever-evolving flavor. With tropical fruits, citrus juices, pineapple and spice berry up front in the aroma and flavor, the biscuit & toasted bread at the back balance out all the hops and make a great finish to go on to your next can of PINNER.','beer'));
questions.push(new beeroItem('DEAD GUY','In the style of a German Maibock, brewed using a proprietary Pacman yeast, Dead Guy Ale is deep honey in color with a malty aroma, rich hearty flavor and a well balanced finish.','beer'));
questions.push(new beeroItem('WAILING WENCH','Dark and robust brewed in the style of a American Strong Ale, full bodied and screaming with hops. This beer was awarded a gold medal in the 2012 World Beer Championship, with a rating of exceptional.','beer'));
questions.push(new beeroItem('ARISIA','Arisia is the Green Lantern of Space Sector 2815. Her family has a long and proud history serving in the Green Lantern Corps.','hero'));
questions.push(new beeroItem('EMMA FROST','The former White Queen of the Hellfire Club, Emma Frost is a powerful mutant telepath who can transform herself into organic diamond. She has become an eminent member among the X-Men.','hero'));
questions.push(new beeroItem('MADROX','Jamie Madrox, also known as Multiple Man, is a mutant with the ability to create duplicates of himself through physical contact. These "dupes" can later be reabsorbed, along with all of their memories and experiences. Madrox runs X-Factor Investigations, a mutant detective agency.','hero'));




//load the next question or show final
function showQuestion(question, tempscore){
	if(question < questions.length){
		//print question

		//modifier to show correct question number instead of array number
		var questionNum = question +1;

		$("#scoreBox").html("question " + questionNum + " of " + questions.length);
		$("#questionBox").html("<span>IS</span> " + questions[question].title);
		$('#guessBox').fadeIn();
	}else{
		//showFinal(score);
		$("#finalScore").html(tempscore + " out of " + questions.length);
		$('#finalScore').fadeIn();
	}
}


//check if they got it right then load next
function evaluateQuestion(question,guess){
	if(guess == questions[question].type){
		console.log('right!');
		$("#resultBox").html("right answer!");
		score++;
		$("#resultDescription").html(questions[question].description);
		//$('#resultBox').fadeIn();
		//$('#resultDescription').fadeIn();
		$('#nextBox').fadeIn();
		$('#resultWrapper').fadeIn();
	}else{
		$("#resultBox").html("wrong answer!");
		$("#resultDescription").html(questions[question].description);
		//$('#resultBox').fadeIn();
		//$('#resultDescription').fadeIn();
		$('#nextBox').fadeIn();
		$('#resultWrapper').fadeIn();
	}
	//raise count
	qCount++;
	
}


//button clicks
 $('#guessBox a').click(function(event) {
			event.preventDefault();
			$('#guessBox').hide();
			evaluateQuestion(qCount,$(this).attr('id'));
			return false;
});
 $('#nextBox a').click(function(event) {
			event.preventDefault();
			$('#resultWrapper').hide();
			$('#nextBox').hide();
			//$('#resultBox').hide();
			//$("#resultDescription").hide();
			showQuestion(qCount,score);
			return false;
});




//initialize game
function playGame(){
	$('#nextBox').hide();
	$('#resultWrapper').hide();
	shuffle(questions);
	showQuestion(qCount,score);
}

