// JavaScript Document

/* Gamestructure 

    Play game in between user and computer
        - wins
        - losses

    computerChoices
        - give computer some choices

        - computerGuess
            - let computer guess random character from choices

    UserChoices
        - guesses
            - total 9 guesses to figure out what computer has selected.

    Reset Game
        - User Guesses
            - guessesLeft
                - total 9 guesses left to start
            - guessedLetters
                - make sure empty out all guesses to left
            - letterToGuess
                - begin with empty to string

    


    

*/
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
var color = "rgb(" + Math.floor(Math.random() * 56) + "," + Math.floor(Math.random() * 56) + "," + Math.floor(Math.random() * 56) + ")"

// let computer select one letter


var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
var updateComputerGuess = function() {
    document.getElementById('bg').style.backgroundColor = color;
};
//	computerGuess.push(a);

// let's figure out guesses 

var updateGuessesLeft = function() {
    // Here we are grabbing the HTML element and setting it equal to the guessesLeft. (i.e. guessesLeft will get displayed in HTML)
    if (guessesLeft >= 2) {
        document.querySelector("#aNumChg").innerHTML = "You have " + guessesLeft + " chances <span style='white-space: nowrap;'>to match that character!</span>";
    } else { document.querySelector("#aNumChg").innerHTML = "You have last chance <span style='white-space: nowrap;'>to match that character!</span>"; }
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

    if (guessesLeft > 0) {
        if (userGuess == letterToGuess) {
            wins++;
            document.querySelector('#win').innerHTML = "Your Wins: " + wins;
            document.querySelector('#areYouReady').innerHTML = "Yes, you are psychic!!";
            document.querySelector('#compGuessDisplay').innerHTML = letterToGuess;
            reset();
        }
    } else if (guessesLeft == 0) {
        losses++;
        document.querySelector('#loss').innerHTML = "Your Losses: " + losses;
        document.querySelector('#areYouReady').innerHTML = "Nope, you are NOT psychic, play again!";
        document.querySelector('#compGuessDisplay').innerHTML = letterToGuess;
        reset();
    }
};