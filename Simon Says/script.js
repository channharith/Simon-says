
// Add in buttons to make sure the game recognizes the buttons
var buttonColors = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;


// Add a way to start the level using JQuery
// Increase levels as we continue to press buttons
$(document).keypress(function() {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});



//Once you click a button there should be a function
//The function should track userChosenColor there should be a function to check the Answer
$(".btn").click(function() {

  var userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);

  checkAnswer(userClickedPattern.length-1);
});

//When the game checks the function it should there should be a delay before clicking the next color
// The delay should give enough time so that there is a visible color flash

function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
      if (userClickedPattern.length === gamePattern.length){
        setTimeout(function () {
          nextSequence();
        }, 100);
      }
    } else {
      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 100);

      startOver();
    }
}

//The game should have a RNG to select colors and then it should flash the button
//As the RNG is collecting colors, they're being added into an Array for the game to record.
function nextSequence() {
  userClickedPattern = [];
  level++;
  $("#level-title").text("Level " + level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);

  $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
  
}

// Function for the game to restart.
function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}
