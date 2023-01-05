const quizTitle = document.querySelector("#title");
const quizInst = document.querySelector("#instructions");
const quizQuestion = document.querySelector("#question");
const questionNum = document.querySelector("#questionNum");
const quizAnswers = document.querySelector("#answers");
const quizTimer = document.querySelector("#timer");
const highScores = document.querySelector('highscores')
const startButton = document.querySelector("#start");

let currentScore = 0;
var timer = 100;
let currentQuestion = 0;

var allQuestions = [
  { questionNumber: "1", questionText: "How many licks does it take to get to the center of a Tootsie Roll Pop?", answer:["What1", "Where1", "Why1"],correctAnswer: 1},
  { questionNumber: "2", questionText: "How many licks does it take to get to the center of a Tootsie Roll Pop?", answer:["What2", "Where2", "Why2"], correctAnswer: 2},
  { questionNumber: "3", questionText: "How many licks does it take to get to the center of a Tootsie Roll Pop?", answer:["What3", "Where3", "Why3"], answer3: "Why3", correctAnswer: 0}
]


function introPage(){
  console.log(allQuestions)  
  console.warn("yo!");
  // primary intro page
  quizTitle.textContent = 'Coding Quiz Challenge';
  // console.log("hello world");
  // console.log(quizTitle)
  quizTimer.textContent = `Time: ${timer}`;
  quizInst.textContent = "Try to answer the following questions about geeky things within the time limit. Keep in mind that incorrect answers will penalize your scoretime by ten seconds! Oh noes!"
  startButton.textContent = "Start!"    
  startButton.addEventListener("click", function(){
    startButton.remove();
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


  
  questionNum.textContent = `Question Numero ${currentQuestion+1}`;
  
  quizQuestion.textContent = allQuestions[0].questionText;
  // displays the question answers from the array
  for (i=0; i<allQuestions[0].answer.length; i++){
    var quizButton = document.createElement("button");
    quizButton.textContent = allQuestions[0].answer[i];
    quizAnswers.append(quizButton);    
    // make a button




  }




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