// JavaScript Document

// Gamestructure 
// Createing var for a to z lower case individual

var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// for game reset and variables to store data
// reset, button clicked, compSelect, mySelect, guesses

var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 9;
var guessedLetters = [];
var letterToGuess = null;
//var computerGuess;

// let computer select one letter


var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
var updateComputerGuess = function () {
	var color = "rgb(" + Math.floor(Math.random() * 56) + "," + Math.floor(Math.random() * 56) + "," +  Math.floor(Math.random() * 56) + ")";
	document.querySelector('#bg').style.backgroundColor = color;
};
//	computerGuess.push(a);

// let's figure out guesses 

var updateGuessesLeft = function() {
  // Here we are grabbing the HTML element and setting it equal to the guessesLeft. (i.e. guessesLeft will get displayed in HTML)
 if(guessesLeft>=2){
	 document.querySelector("#aNumChg").innerHTML = "You have " + guessesLeft + " chances to match that character!"; 
 } else {document.querySelector("#aNumChg").innerHTML = "You have last chance to match that character!";}
};
	
var updateLetterToGuess = function() {
  this.letterToGuess = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];
};
	
var updateGuessesSoFar = function() {
  document.querySelector('#youGuessLetters').innerHTML = guessedLetters.join(', ');
};

// reset

var reset = function() {
  guessesLeft = 9;
  guessedLetters = [];
  updateLetterToGuess();
  updateGuessesLeft();
  updateGuessesSoFar();
  updateComputerGuess();
};

updateLetterToGuess();
updateGuessesLeft();


// let user select one letter

document.onkeyup = function(event) {
    guessesLeft--;
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

  guessedLetters.push(userGuess);
  updateGuessesLeft();
  updateGuessesSoFar();

// if/else letter match
	
        if (guessesLeft > 0){
            if (userGuess == letterToGuess){
                wins++;
                document.querySelector('#win').innerHTML = "Your Wins: " + wins;
				document.querySelector('#areYouReady').innerHTML = "Yes, you are psychic!!";
				document.querySelector('#compGuessDisplay').innerHTML= letterToGuess;
                reset();
            }
        }else if(guessesLeft == 0){ 
            losses++;
            document.querySelector('#loss').innerHTML = "Your Losses: " + losses;
			document.querySelector('#areYouReady').innerHTML = "Nope, you are NOT psychic, play again!";
			document.querySelector('#compGuessDisplay').innerHTML= letterToGuess;
            reset();
        }
};
