var playersGuess, winningNumber,
tries = [];//length of tries = count

/* **** Guessing Game Functions **** */

// Generate the Winning Number

function generateWinningNumber(){
	// add code here
  var min = 1, max =100;
  return winningNumber = getRandom(min,max);

}
function getRandom(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// Fetch the Players Guess

function playersGuessSubmission(){
	// add code here
  playersGuess = +$("#guess").val();
  return checkGuess();
}

// Determine if the next guess should be a lower or higher number

function lowerOrHigher(){
	// add code here

  var relative, distance, result;
  if(playersGuess<winningNumber){
    relative = "lower";
  }else{
    relative = "higher";
  };

  distance = Math.abs(winningNumber-playersGuess)+ getRandom(1,10);
  //debugger;
  result = "<p>Try Again! Your guess is "+relative+" than the winning number. </p><p> You're within "+ distance+ " though.</p>";
  return result;
}

// Check if the Player's Guess is the winning number

function checkGuess(){
	// add code here
  if(playersGuess===winningNumber){
    msgUpdate("Winner, winner, chicken dinner!");
    $("#message").addClass("win");
  }else if(!tries.includes(playersGuess)){
      //if new incorrect guess add guess to array
      tries.push(playersGuess);
      guessMessage();
    } else {
    msgUpdate("Submitted duplicate guess. Try again");

    }
}

// Create a provide hint button that provides additional clues to the "Player"

function provideHint(){
	// add code here
  var numofHints = (tries.length)*2;
  if (numofHints>0){
  //debugger;
  var hints = [];
  for (var i=0; i<numofHints+1; i++){
    var newNum = getRandom(1,100);
    hints[i]=newNum;
    //debugger;
  };
  console.log(hints);
  hints[getRandom(0,numofHints)]=winningNumber;
  console.log(hints);
  msgUpdate("The number is one of the following numbers: " + hints.toString());
}
else {msgUpdate("At least try first. :)")}
}

// Allow the "Player" to Play Again
function playAgain(){
	// add code here
  generateWinningNumber();
  tries = [];
  msgUpdate("");
  $("#guess").val("");
  $("#message").removeClass("win");

}

function msgUpdate(msg){
  $("#message").html(msg);
}

function guessMessage(){
  if(tries.length<5) {
    msg =lowerOrHigher();
  }else{
    msg="You've used all your guesses. The number was "+ winningNumber;
  }
  msgUpdate(msg);
}


/* **** Event Listeners/Handlers ****  */
//on document load
$(document).ready(function() {


  generateWinningNumber();
  $("#submit").click(function() {
    if($("#guess").val()){
      playersGuessSubmission();
    }
  });
  $("input").keypress(function(event) {
    if (event.which == 13) {
        event.preventDefault();
        playersGuessSubmission();
    }
});
  $("#guess").focus(function(){
    msgUpdate("");
  });
  $("#hint").click(function(){
    provideHint();
  });
  $("#reset").click(function(){
    playAgain();

  })



});
