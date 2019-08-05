
let wins = 0;
let loss = 0;
let userChances = 9;
let compFinalChoice = null;

function reset() {
    userChances = 9;
    compFinalChoice = null;
    compGuess();
    alert("do it again!");
}

// set computer choices in between 'a' to 'z'
const computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const compGuess = function() {
    //hide button
    document.querySelector('#hideButton').style.display = "none";
    
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

        //if and else for 
        if(compFinalChoice === userGuess) {
            //adding one win
            wins++
            //test check
            console.log("win: " + wins);

            //reset all value and restart game
            reset();

        } else if(userChances >= 2) {
            //user chances are going 1 down
            userChances --
            //test check
            console.log(userChances);
        } else {
            //user lost adding one
            loss++
            //test check 
            console.log("loss: " + loss);

            //reset all value and restart game
            reset();

        }
        
    }

}
