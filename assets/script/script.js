const quizTitle = document.querySelector("#title");
const quizInst = document.querySelector("#instructions");
const quizAnswers = document.querySelector("#options");
const quizQuestion = document.querySelector("#questions");
const quizTimer = document.querySelector("#timer");
const highScores = document.querySelector('highscores')
const startButton = document.querySelector("#start");

let currentScore = 0;
var timer = 100;

var allQuestions = [
  { questionNumber: "1", answer1: "What", answer2: "Where", answer3: "Why", correctAnswer: 2},
  { questionNumber: "2", answer1: "What", answer2: "Where", answer3: "Why", correctAnswer: 3},
  { questionNumber: "3", answer1: "What", answer2: "Where", answer3: "Why", correctAnswer: 1}
]

function introPage(){
  console.log(allQuestions)  
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
// where am I in the quiz? pre/in/results
// in the quiz, what's gong on? the timer and the score
// things that are happening in the one question
// 

function quizRunner(){  
  // set the timer to 100 seconds
  // what happens when it ticks   

  setInterval(function(){
    console.log(timer);
    timer--;
    if (timer === 0){
      // go to the show your score and put your name in screen
      
    } else {
      // keep going
    }
  }, 1000);

  // startTheTimer();

  // blank out the prior text fields and start button
  
  quizTitle.textContent = ""
  quizInst.textContent = "";




}

introPage()

















// click the start button - DONE
// timer starts
// question shows
//    I've populated the question fields correctly
//    
// click the answer
// record result
//  if incorrectd answer, subtract 10 seconds from the clock
// present new question

// timer reaches 0
//  game is over
// prompt user to save initials and score
// which will persist in reloading the page


// startQuiz ();