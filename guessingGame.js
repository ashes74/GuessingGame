var playersGuess, winningNumber,
tries = [];//length of tries = count

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
  if(playersGuess<winningNumber){

  }else{

  }
}

// Check if the Player's Guess is the winning number

function checkGuess(){
	// add code here
  console.log(winningNumber + " " + playersGuess);
  //if good guess, then done
  if(playersGuess===winningNumber){
    msgUpdate("Winner, winner, chicken dinner!");
    playAgain();
  }else if(!tries.includes(playersGuess)){
      //if new incorrect guess add guess to array
      tries.push(playersGuess);

      if(tries.length<5) {
        msgUpdate("Try Again!");
      }else{
        msgUpdate("You've used all your guesses");
        playAgain();
      }

    } else {
      msgUpdate("Submitted duplicate guess. Try again")
    }
}

// Create a provide hint button that provides additional clues to the "Player"

function provideHint(){
	// add code here
}

// Allow the "Player" to Play Again

function playAgain(){
	// add code here
}

function msgUpdate(msg){
  $("#message").text(msg);
}


/* **** Event Listeners/Handlers ****  */
//on document load
$(document).ready(function() {


  generateWinningNumber();
  $("#submit").click(function() {
    playersGuessSubmission();
  });
  $("input").keypress(function(event) {
    if (event.which == 13) {
        event.preventDefault();
        playersGuessSubmission();
    }
});
  $("#guess").focus(function(){
    msgUpdate("");
  })



});
