//reset
function resetZero(){
    if (window.confirm("Do you really want to reset your game?")) { 
        window.location.reload();
      } else {
          alert('Good choice!');
      }
}


//game
let wins = 0;
let loss = 0;
let userChances = 9;
let compFinalChoice = null;
let userGuessed = [];

function reset() {
    userChances = 9;
    userGuessed = [];
    compFinalChoice = null;
    compGuess();
    console.log("do it again!");
    //chances update
    document.querySelector("#chances").innerText = "9 chances";
}

// set computer choices in between 'a' to 'z'
const computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const compGuess = function() {
    //hide button
    document.querySelector('#hideButton').style.display = "none";
    document.querySelector('#hideHeader').style.display = "none";
    document.querySelector('#showGame').style.display = "block";
    document.querySelector('#showButton').style.display = "block";

    //let computer choose in between a to z
    let charComputerChoice = Math.floor(Math.random() * computerChoices.length);
    //test check
    console.log(charComputerChoice);

    //test check
    console.log(computerChoices[0]);
    console.log(computerChoices[parseInt(charComputerChoice)]);
    //find what computer choose
    compFinalChoice = computerChoices[parseInt(charComputerChoice)];
    //test check
    console.log(compFinalChoice);

    //now if user press down any key 
    document.onkeyup = function(event) {

        //save key
        let userGuess = String.fromCharCode(event.keyCode).toLowerCase(); 
        //test check
        console.log(userGuess);

        //this function specify only for not reapeating again same word
        function check(obj, list) {
            var i;
            for (i = 0; i < list.length; i++) {
                if (list[i] === obj) {
                    userChances++
                    return false;
                }
            }
            list.push(obj);
        }
    
        check(userGuess, userGuessed);

        //add those values
        if(userGuessed.length<=9){
            document.querySelector('#guessedOne').innerHTML = userGuessed.join(" ");
        }

        //emoji
        if(userGuessed.length>8){
            document.querySelector('#emoji').innerHTML = ('<i class="fas fa-tired"></i>');
        } else if(userGuessed.length>6){
            document.querySelector('#emoji').innerHTML = ('<i class="fas fa-frown"></i>');
        } else if(userGuessed.length>4){
            document.querySelector('#emoji').innerHTML = ('<i class="fas fa-meh"></i>');
        } else if(userGuessed.length>2){
            document.querySelector('#emoji').innerHTML = ('<i class="fas fa-smile"></i>');
        } else {
            document.querySelector('#emoji').innerHTML = ('<i class="fas fa-grin"></i>');
            document.querySelector('#computerGuessScreen').innerText = "?";
        }

        //if and else for wins and losses
        if(compFinalChoice === userGuess) {
            //adding one win
            wins++
            //test check
            console.log("win: " + wins);
            //adding in the display
            document.querySelector('#onePlus').innerText = wins;

            //matched with yours
            document.querySelector('#computerGuessScreen').innerText = compFinalChoice;

            //winning statement
            document.querySelector("#notes").innerText = "You are the psychic! Play again!"

            //emoji
            document.querySelector('#emoji').innerHTML = ('<i class="fas fa-grin-stars"></i>');

            //reset all value and restart game
            reset();

        } else if(userChances > 2) {
            //user chances are going 1 down
            userChances --
            //test check
            console.log(userChances);
            //chances update
            document.querySelector("#chances").innerText = userChances + " chances";
            //Try again statement
            document.querySelector("#notes").innerText = "Try again!"

        } else if(userChances === 2) {
            //user chances are going 1 down
            userChances --
            //test check
            console.log(userChances);
            //chances update
            document.querySelector("#chances").innerText = "last chance";

        } else {
            //user lost adding one
            loss++
            //test check 
            console.log("loss: " + loss);
            //adding in the display
            document.querySelector('#oneMinus').innerText = loss;

            //lossing statement
            document.querySelector("#notes").innerText = "Oh no! Play again!"

            //matched with yours
            document.querySelector('#computerGuessScreen').innerText = compFinalChoice;

            //reset all value and restart game
            reset();

        }
        
    }

}
