
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var yourGuesses = [];
var letterToGuess = null;
var guessesRemaining = 9;
var wins = 0;
var losses = 0;

var updateGuessesRemaining = function() {
document.querySelector("#guessesRemaining").innerHTML = guessesRemaining;
}

var updateYourGuesses = function() {
document.querySelector("#yourGuesses").innerHTML = yourGuesses;
}

var updateLetterToGuess = function() {
letterToGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
}

var reset = function() {
    guessesRemaining = 9;
    yourGuesses = [];

    updateLetterToGuess();
    updateGuessesRemaining();
    updateYourGuesses();
}

updateLetterToGuess();
updateGuessesRemaining();


document.onkeyup = function(event) {
    guessesRemaining--;
    var letter = String.fromCharCode(event.which).toLowerCase();
    yourGuesses.push(letter);
    updateGuessesRemaining();
    updateYourGuesses();
    if (letter === letterToGuess) {
        wins++;
        document.querySelector("#wins").innerHTML = wins;
    reset();
    }
    else if (guessesRemaining === 0) {
        losses++;
        document.querySelector("#losses").innerHTML = losses;
        reset();
    }
};