var timeRemaining = $('#timer');
var startButton = $('#startbutton');
var highScore = $('#highscore');
var card = $('#card');

function startQuiz() {
    // Removes 'Start' and 'High Score' buttons and starts timer.
    startButton.remove();
    highScore.remove();
    $('#initialbuttons').remove();
    setTime();
    // Need to insert h4 element and append question text.
    // card.add("h4");
    // $('#q').text(questions[0]);
 
}

// Creates timer for quiz and counts down every second (1000ms).
function setTime() {
    var secondsLeft = 91;
    var timerInterval = setInterval(function() {
      secondsLeft--;
      $('#timer').text(secondsLeft)
      console.log(secondsLeft);
//   Resets the interval when out of time.
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
      }
  
    }, 1000)};

function nextQuestion() {

}

function selectAnswer() {

}

startButton.on('click', startQuiz);