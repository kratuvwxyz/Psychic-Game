// JavaScript Document

/* Gamestructure 

1.  Play game in between user and computer
        - wins
        - losses

2.  Before Game Start
        - User Guesses
            - guessesLeft
                - total 9 guesses left to start
            - guessedLetters
                - make sure empty out all guesses to left
            - letterToGuess
                - begin with empty to string

3.  computerChoices
        - give computer some choices

        - letterToGuess
            - let computer guess random character from choices
        
        - updatLetterToGuess
            - update letter everytime once game over

4.  userChoices
        - guesses
            - total 9 guesses to figure out what computer has selected.

        - updateGuessesLeft
            - To point out user how many guesses/guess left

        - updateGuessesSoFar
            - Show guesses user has selected and join them with ','
        - Let user select one key
            - onKeyUp
                - userGuess
                    - if userGuess match letterToGuess
                        - wins ++
                        - reset()
                        - update note to say "you are psychic"
                    - if userGuess is not matching
                        - check if guessLeft > 0
                            - if
                                - check userGuess is not repeating
                                    - if 
                                        - return false
                                    - else
                                        - put this guess into guessedLetters
                                        - update note to say "keep trying"
                            - else
                                - loose ++
                                - reset()
                                - update note to say "you are not psychic, try again!"



5.  Reset
        - guessesLeft = 9;
        - guessedLetters = [];
        - updateLetterToGuess();
        - updateGuessesLeft();
        - updateGuessesSoFar();
        - updateComputerGuess(); // background color change

6.  Extra
        - colors
            - change background color everytime when update on computer guess //updateComputerGuess()

*/

//1
var wins = 0;
var losses = 0;

//2
var guesses = 9;
var guessesLeft = 9;
var guessedLetters = [];
var letterToGuess = null;

//6
var color = "rgb(" + Math.floor(Math.random() * 56) + "," + Math.floor(Math.random() * 56) + "," + Math.floor(Math.random() * 56) + ")"

var updateComputerGuess = function() {
    document.getElementById('bg').style.backgroundColor = color;
};

//3
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//computer guess one letter and once it match (or not) it updates
var updateLetterToGuess = function() {
    this.letterToGuess = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];
};

//5
var reset = function() {
    guessesLeft = 9;
    guessedLetters = [];
    updateLetterToGuess();
    updateGuessesLeft();
    updateGuessesSoFar();
    updateComputerGuess();
};

//4
var updateGuessesLeft = function() {
    // Here we are grabbing the HTML element and setting it equal to the guessesLeft. (i.e. guessesLeft will get displayed in HTML)
    if (guessesLeft >= 2) {
        document.querySelector("#aNumChg").innerHTML = "You have <span style='white-space: nowrap;'>" + guessesLeft + " chances</span> <span style='white-space: nowrap;'>to match that</span> character!";
    } else { document.querySelector("#aNumChg").innerHTML = "You have last chance <span style='white-space: nowrap;'>to match that</span> character!"; }
};

var updateGuessesSoFar = function() {
    document.querySelector('#youGuessLetters').innerHTML = guessedLetters.join(', ');
};

updateLetterToGuess();
updateGuessesLeft();

document.onkeyup = function(event) {

    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    function check(obj, list) {
        var i;
        for (i = 0; i < list.length; i++) {
            if (list[i] === obj) {
                return false;
            }
        }
        list.push(obj);
        guessesLeft--;
    }

    check(userGuess, guessedLetters);

    updateGuessesLeft();
    updateGuessesSoFar();

    if (guessesLeft > 0) {
        if (userGuess == letterToGuess) {
            wins++;
            document.querySelector('#win').innerHTML = "Total Wins: " + wins;
            document.querySelector('#areYouReady').innerHTML = "Yes, you are psychic!!";
            document.querySelector('#compGuessDisplay').innerHTML = letterToGuess;
            reset();
        } else {
            document.querySelector('#areYouReady').innerHTML = "Keep trying!";
        }

    } else if (guessesLeft == 0) {
        losses++;
        document.querySelector('#loss').innerHTML = "Total Losses: " + losses;
        document.querySelector('#areYouReady').innerHTML = "Nope, you are NOT psychic, play again!";
        document.querySelector('#compGuessDisplay').innerHTML = letterToGuess;
        reset();
    }
};