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
  $("#guess").val("");
  return checkGuess();
}

// Determine if the next guess should be a lower or higher number

function lowerOrHigher(){
	// add code here

  var relative, distance, temp, result;
  if(playersGuess<winningNumber){
    relative = "too low";
  }else{
    relative = "too high";
  };

  distance = Math.abs(winningNumber-playersGuess)+ getRandom(1,10);

  if (distance<5){temp = "SUUUPPPER CLOSE";}
  else if(distance<20){temp = "warm";}
  else if(distance<50){temp = "cool... but not close";}
  else{temp= "BRRRR. Soo cold, just start over."}
  //debugger;
  result = "<p>Try Again! Your guess is "+relative+". </p><h3> You're "+temp+"</h3><p>At least "+ distance+ " away.</p>";
  return result;
}

// Check if the Player's Guess is the winning number

function checkGuess(){
	// add code here
  if(tries.length<5){
  if(playersGuess===winningNumber){
    msgUpdate("Winner, winner, chicken dinner!");
    $("#message").addClass("win");
  }else if(!tries.includes(playersGuess)){
      //if new incorrect guess add guess to array
      tries.push(playersGuess);
      $(".guessCount").html( "<p>"+(5-tries.length) +" guesses remaining.</p>");
      guessMessage();
    } else {
    msgUpdate("Submitted duplicate guess. Try again");

    }
  }else {
    msgUpdate("No guesses remaining");
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
  $(".guessCount").html("");
  $("#message").removeClass("win")
  $("#message").removeClass("lose");
    $("#guess").removeClass("disabled")

}

function msgUpdate(msg){
  $("#message").html(msg);
}

function guessMessage(){
  if(tries.length<5) {
    msg =lowerOrHigher();

  }else{
    msg="You've used all your guesses. The number was "+ winningNumber;
    $("#message").addClass("lose");
    $("#submit").addClass("disabled");

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
