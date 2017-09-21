var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var words = ["dog","cat", "bear", "dinosaur", "donkey", "tiger", "lion"]
var guesses = 10
var wins = 0
var guessesElem = document.getElementById("showGuess")
var dashElem = document.getElementById("showDash")
var userInputElem = document.getElementById("showInput")
var winsElem = document.getElementById("showWins")
var winnerElem = document.getElementById("winners")

function firstRound(){

	var computerChoice = words[Math.floor(Math.random()*words.length)]

	console.log(computerChoice)

	var letters = [];

	for (var i = 0; i < computerChoice.length; i++){
		letters[i] = "_ ";
	}

	dash = letters.join(" ");

	console.log(dash);

	var mysteryWord = [];

	for (var i = 0; i < computerChoice.length; i++) {
		mysteryWord.push(computerChoice.charAt(i));
		mysteryWord.toString(i)
	}

	console.log(mysteryWord)

	var userInputArray = [];

	document.onkeyup = function(event) {
		var userInput = event.key;
		// To Do Mystery word will not work with repeats of letter
		var index = mysteryWord.indexOf(userInput);

		console.log(index)

		if (index > -1) {
			letters[index] = userInput
			dash = letters.join(" ")
		}
		else {
			userInputArray.push(userInput)
			userInputElem.textContent = userInputArray
			guesses--;
		}
		if (dash === "d o g" || dash === "c a t" || dash === "b e a r" || dash === "d i n o s a u r" || dash === "d o n k e y" || dash === "t i g e r" || dash === "l i o n"){
			wins++;
			var winner = ("You're a winner!!!")
			//nextRound();

		}
		if(guesses === 0){
		alert("Game Over! TRY AGAIN");
		nextRound();
		}
		winnerElem.textContent = winner
		guessesElem.textContent = guesses;
		dashElem.textContent = dash;
		winsElem.textContent = wins;
	}
		nextRound();
}
function nextRound(){
	guesses = 10
	var computerChoice = words[Math.floor(Math.random()*words.length)]

	console.log(computerChoice)

	var letters = [];

	for (var i = 0; i < computerChoice.length; i++){
		letters[i] = "_ ";
	}

	dash = letters.join(" ");

	console.log(dash);

	var mysteryWord = [];

	for (var i = 0; i < computerChoice.length; i++) {
		mysteryWord.push(computerChoice.charAt(i));
		mysteryWord.toString(i)
	}

	userInputArray = [];
	userInputElem.textContent = userInputArray

	document.onkeyup = function(event) {
		var userInput = event.key;
		// To Do Mystery word will not work with repeats of letters
		var index = mysteryWord.indexOf(userInput);

		if (index > -1) {
			letters[index] = userInput
			dash = letters.join(" ")
		}
		else {
			userInputArray.push(userInput)
			userInputElem.textContent = userInputArray
			guesses--;
		}
		if (dash === "d o g" || dash === "c a t" || dash === "b e a r" || dash === "d i n o s a u r" || dash === "d o n k e y" || dash === "t i g e r" || dash === "l i o n"){
			wins++;
			var winner = ("You're a winner!!!")
			nextRound();
		}
		if(guesses === 0){
			alert("Game Over! TRY AGAIN");
			nextRound();
		}
		winnerElem.textContent = winner
		guessesElem.textContent = guesses;
		dashElem.textContent = dash;
		winsElem.textContent = wins;
	}
}

firstRound();



