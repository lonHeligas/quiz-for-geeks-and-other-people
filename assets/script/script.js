var quizTitle = document.querySelector("#title");
var quizInst = document.querySelector("#instructions");
var quizAnswers = document.querySelector("#options");
var quizQuestion = document.querySelector("#questions");
var quizTimer = document.querySelector("#timer");
var highScores = document.querySelector('highscores')
var startButton = document.querySelector("#start");


var allQuestions = [
  { questionNumber: "1", answer1: "What", answer2: "Where", answer3: "Why", correctAnswer: 2},
  { questionNumber: "2", answer1: "What", answer2: "Where", answer3: "Why", correctAnswer: 3},
  { questionNumber: "3", answer1: "What", answer2: "Where", answer3: "Why", correctAnswer: 1}
]


function introPage(){
  // console.log(allQuestions)

  // primary intro page
  quizTitle.textContent = 'Coding Quiz Challenge';
  // console.log("hello world");
  // console.log(quizTitle)
  
  quizInst.textContent = "Try to answer the following questions about geeky things within the time limit. Keep in mind that incorrect answers will penalize your scoretime by ten seconds! Oh noes!"
  startButton.textContent = "Start!"
  startButton.addEventListener("click", function(){
    quizRunner();
  })
  // quizRunner ();
}

function quizRunner(){
  // startTheTimer();

  // blank out the prior text fields and start button
  
  quizTitle.textContent = ""
  quizInst.textContent = "";




}

introPage()

















// click the start button
// timer starts
// question shows
// click the answer
// record result
//  if incorrectd answer, subtract 5 seconds from the clock
// present new question

// timer reaches 0
//  game is over
// prompt user to save initials and score
// which will persist in reloading the page
// startQuiz ();