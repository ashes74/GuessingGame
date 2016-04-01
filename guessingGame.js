var playersGuess, winningNumber;

/* **** Guessing Game Functions **** */

// Generate the Winning Number

function generateWinningNumber(){
	// add code here
  var min = 1, max =100;
  return winningNumber = Math.floor(Math.random() * (max - min + 1)) + min;

}

// Fetch the Players Guess

function playersGuessSubmission(){
	// add code here
  playersGuess = +$("#guess").val();
  //console.log(typeof playersGuess);
  $("#guess").val("");
  return checkGuess();
}

// Determine if the next guess should be a lower or higher number

function lowerOrHigher(){
	// add code here
  alert ("Oh well");



}

// Check if the Player's Guess is the winning number

function checkGuess(){
	// add code here
  console.log(winningNumber + " " + playersGuess);
  if(playersGuess===winningNumber){
    alert("Winner, winner, chicken dinner!");

  }else{
    

  }

  playAgain();
}

// Create a provide hint button that provides additional clues to the "Player"

function provideHint(){
	// add code here
}

// Allow the "Player" to Play Again

function playAgain(){
	// add code here
}


/* **** Event Listeners/Handlers ****  */
//on document load
$(document).ready(function() {
  generateWinningNumber();

  $("#submit").click(function() {
    playersGuessSubmission();
  });

});
