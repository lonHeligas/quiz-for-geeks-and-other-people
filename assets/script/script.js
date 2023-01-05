const quizTitle = document.querySelector("#title");
const quizInst = document.querySelector("#instructions");
const quizQuestion = document.querySelector("#question");
const quizAnswers = document.querySelector("#answers");
const quizTimer = document.querySelector("#timer");
const highScores = document.querySelector('highscores')
const startButton = document.querySelector("#start");

let currentScore = 0;
var timer = 100;
let currentQuestion = 0;

var allQuestions = [
  { questionNumber: "1", questionText: "How many licks does it take to get to the center of a Tootsie Roll Pop?", answer1: "What1", answer2: "Where1", answer3: "Why1", correctAnswer: 2},
  { questionNumber: "2", questionText: "How many licks does it take to get to the center of a Tootsie Roll Pop?", answer1: "What2", answer2: "Where2", answer3: "Why2", correctAnswer: 3},
  { questionNumber: "3", questionText: "How many licks does it take to get to the center of a Tootsie Roll Pop?", answer1: "What3", answer2: "Where3", answer3: "Why3", correctAnswer: 1}
]


function introPage(){
  console.log(allQuestions)  
  // primary intro page
  quizTitle.textContent = 'Coding Quiz Challenge';
  // console.log("hello world");
  // console.log(quizTitle)
  quizTimer.textContent = `Time: ${timer}`;
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
    if (timer === 0){
      // go to the show your score and put your name in screen
      
    } else {
      // keep going
    }
    timer--;
    // populates the timer on-screen. isn't that gweat?
    quizTimer.textContent = `Time: ${timer}`;
  }, 1000);
  
  quizTitle.textContent = "";
  quizInst.textContent = "";
  
  // populate the quiz question AND get the answers as buttons
  // check which button the user clicked and shock or praise them
  // allQuestions[2].answer1
  allQuestions[currentQuestion]

  quizQuestion.textContent = allQuestions[0].questionText;
  quizAnswers.append(allQuestions[0].answer1);
  quizAnswers.append(allQuestions[0].answer2);
  quizAnswers.append(allQuestions[0].answer3);

  // Node.operation.value
  
  
  
  
  
  
  // blank out the prior text fields and start button
  
  
  


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