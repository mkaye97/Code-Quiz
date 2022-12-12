var timeRemaining = $('#timer');
var startButton = $('#startbutton');
var highScore = $('#highscore');
var card = $('#card');
var quizBox = $('#quizbox');
var qLine = $('#q');
var aLine = $('#a');
var bLine = $('#b');
var cLine = $('#c');
var dLine = $('#d');
var nextButton = $('#next');



var questions = [{
  question: '1) Which of these, is not a common data type?',
  answers:['a. Boolean', 'b. Number', 'c. Color', 'd. String'], 
  correctAnswer: 'c. Color'
}, {
  question: '2) When using jQuery, what symbol is used to denote a "selector"?',
  answers:['a. Boolean', 'b. Number', 'c. Color', 'd. String'], 
  correctAnswer: 'c. Color'
}, {
  question: '3) What does "API" stand for?',
  answers:['a. Boolean', 'b. Number', 'c. Color', 'd. String'], 
  correctAnswer: 'c. Color'
}, {
  question: '4) What is the purpose of using a CSS reset?',
  answers:['a. Boolean', 'b. Number', 'c. Color', 'd. String'], 
  correctAnswer: 'c. Color'
}, {
  question: '5) Which of these is not a semantic HTML element?',
  answers:['a. Boolean', 'b. Number', 'c. Color', 'd. String'], 
  correctAnswer: 'c. Color'
}, {
  question: '6) Which coding language focuses on application/page functionality?',
  answers:['a. Boolean', 'b. Number', 'c. Color', 'd. String'], 
  correctAnswer: 'c. Color'
}, {
  question: '7) What does the terminal command "mkdir HTML do?',
  answers:['a. Boolean', 'b. Number', 'c. Color', 'd. String'], 
  correctAnswer: 'c. Color'
}, {
  question: '8) What does the "flex" property do in CSS?',
  answers:['a. Boolean', 'b. Number', 'c. Color', 'd. String'], 
  correctAnswer: 'c. Color'
}, {
  question: '9) Which of these symbols denotes a class in CSS?',
  answers:['a. Boolean', 'b. Number', 'c. Color', 'd. String'], 
  correctAnswer: 'c. Color'
}, {
  question: '10) What is the terminal command to find your current working directory?',
  answers:['a. Boolean', 'b. Number', 'c. Color', 'd. String'], 
  correctAnswer: 'c. Color'
}];

var points = 0;

function startQuiz() {
    // Removes 'Start' and 'High Score' buttons and starts timer.
    $('#initialbuttons').remove();
    setTime();
    quizBox.removeClass("d-none");
    quiz();
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

function quiz() {
  var i = 0;
    qLine.text(questions[i].question);
    aLine.text(questions[i].answers[0]);
    bLine.text(questions[i].answers[1]);
    cLine.text(questions[i].answers[2]);
    dLine.text(questions[i].answers[3]);
}

function selectAnswer() {

}

startButton.on('click', startQuiz);

nextButton.on('click')