

var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
console.log (computerChoices.length);
// all 26 characters are included

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var lettersGuessed = [];
var computerGuess = [];

window.onload = function() {
    var pcGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    // pushing the generated var pcGuess into another predefined computerGuess array
    computerGuess.push(pcGuess);
    console.log(computerGuess[0]);
    // so far so good
}

document.onkeyup = function (event) {
    var playerGuess = event.key;
    lettersGuessed.push(playerGuess);
    
if ((playerGuess === computerGuess[0]) && (guessesLeft > 0)) {
    wins++;
    guessesLeft = 9;
    lettersGuessed.length = 0;
    computerGuess.length = 0;
    var pcGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    computerGuess.push(pcGuess);

}
else if ((playerGuess !== computerGuess[0]) && (guessesLeft > 0 )) {
    guessesLeft = guessesLeft-1;
}

else {
    losses++
    guessesLeft = 9;
    lettersGuessed.length = 0;
    computerGuess.length = 0;
    var pcGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    computerGuess.push(pcGuess);
}

var board = "<h2>Guess What Letter I'm Thinking Of,</h2>" +
            "<p>Wins: " + wins + " </p>" +
            "<p>Losses: " + losses + "</p>" +
            "<p>Guesses left: " + guessesLeft + "</p>" +
            "<p> You have guessed : " + lettersGuessed + "</p>";
    document.querySelector("#board").innerHTML = board;

}



