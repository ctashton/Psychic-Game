// define possible answers
var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
for (let i = 0; i < letters.length; i++) {
    const lettersIndex = letters[i];
    
}

// define computer choice math 
var answer = letters[Math.floor(Math.random() * letters.length)];
// define total guesses
var guessesLeft = 0;
// empty array to be filled with guesses from user
var guessesSoFar = [];
// wins
var wins = 0;
// losses
var losses = 0;

// set variables for use in display function
/*var directionsText = document.getElementById("directions");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("lossesText");
var guessesLeftText = document.getElementById("guessesLeftText");
var guessesText = document.getElementById("guessesText");
*/

// Our start game function.  This resets the values when  called.
function resetGame() {
    guessesLeft = 9;
    guessesSoFar = [];
    answer = letters[Math.floor(Math.random() * letters.length)];

    
    updateDisplay()
 };
// Our update Display function.  This will push the output of our other functions to the display when called.
function updateDisplay() {
    document.getElementById("directions").innerText = ("Guess which letter I'm thinking of.  Enter a key to begin")
    document.getElementById("wins-text").innerText = ("Wins: ") + wins;
    document.getElementById("lossesText").innerText = ("Losses: ") + losses;
    document.getElementById("guessesLeftText").innerText = ("Guesses Left: ") + guessesLeft;
    document.getElementById("guessesText").innerText = ("Guesses So Far:") + guessesSoFar;
};

 // This function is run whenever the user presses a key.
document.onkeyup = function(event) {
     // Determines which key was pressed and changes it to uppercase
    var userGuess = event.key.toUpperCase();
    // uses event by keyCode to determine A(65) through Z()
    if (event.keyCode >= 65 && event.keyCode <= 90){
        // run the guess check function
       guessCheck(userGuess)
    };
    
    // Declaring the guessCheck function()
    function guessCheck() {

        // if guesses left are greater than 0 then...
        if (guessesLeft > 0) { 
            // if guess has already been used (Guesses so far array INCLUDES User Guess), end the function
            if (guessesSoFar.includes(userGuess)){
                return;
            }
            //if userGuess is exactly equal to the answer...
            if(userGuess === answer){
                // wins gets 1 point and game resets
                wins++
                resetGame()
             } else {
                // otherwise your guesses left goes down and guessesSoFar array gets updated with your guess
                guessesLeft--;
                guessesSoFar.push(userGuess);
                };
        //runs the update display function to update the new conditions
        updateDisplay();
        // if your guesses drop below zero, your losses integer goes up and the game resets
        } else{
            losses++
            resetGame()
        };
    };
};