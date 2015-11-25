//item objects
function beeroItem(title, description, type, order){
	this.title = title;
	this.description = description;
	this.type = type;
	this.order = order;
	this.asked = false;
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


questions.push(new beeroItem('blue','a good beer','beer'));
questions.push(new beeroItem('spiderman','the webslinger','hero'));




//load the next question or show final
function showQuestion(question, tempscore){
	if(question < questions.length){
		//print question

		//modifier to show correct question number instead of array number
		var questionNum = question +1;

		$("#scoreBox").html("question " + questionNum + " of " + questions.length);
		$("#questionBox").html(questions[question].title);
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
		$('#resultBox').fadeIn();
		$('#nextBox').fadeIn();
	}else{
		$("#resultBox").html("wrong answer!");
		$('#resultBox').fadeIn();
		$('#nextBox').fadeIn();
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
			$('#nextBox').hide();
			$('#resultBox').hide();
			showQuestion(qCount,score);
			return false;
});




//initialize game
function playGame(){
	$('#nextBox').hide();
	shuffle(questions);
	showQuestion(qCount,score);
}

