const quizTitle = document.querySelector("#title");
const quizInst = document.querySelector("#instructions");
const quizQuestion = document.querySelector("#question");
const questionNum = document.querySelector("#questionNum");
const quizAnswers = document.querySelector("#answers");
const quizTimer = document.querySelector("#timer");
const highScores = document.querySelector('highscores')
const startButton = document.querySelector("#start");
const quizFeedback = document.querySelector("#feedback");

let quizButton = document.createElement("button");
let currentScore = 0;
let secondsLeft = 3;
let currentQuestion = 0;

var allQuestions = [
  { questionNumber: "1", questionText: "How many licks does it take to get to the center of a Tootsie Roll Pop?", answer:["What1", "Where1", "Why1"],correctAnswer: 1},
  { questionNumber: "2", questionText: "How many licks does it take to get to the center of a Tootsie Roll Pop?", answer:["What2", "Where2", "Why2"], correctAnswer: 2},
  { questionNumber: "3", questionText: "How many licks does it take to get to the center of a Tootsie Roll Pop?", answer:["What3", "Where3", "Why3"], answer3: "Why3", correctAnswer: 0}
]


function introPage(){

  // console.log(allQuestions)  
  // console.warn("yo!");

  // primary intro page
  quizTitle.textContent = 'Geeks and Non-Geeks Quiz';

  // console.log("hello world");
  // console.log(quizTitle)

  quizTimer.textContent = `Time: ${secondsLeft}`;
  quizInst.textContent = "Try to answer the following questions about geeky things within the time limit. Keep in mind that incorrect answers will penalize your scoretime by ten seconds! Oh noes!"
  startButton.textContent = "Start!"    
  startButton.addEventListener("click", function(){
    startButton.remove();    
    startTimer();
  })
  
}

// dev notes:
// where am I in the quiz? pre/in/results
// in the quiz, what's gong on? the timer and the score
// things that are happening in the one question


function startTimer(){ 
  console.warn(secondsLeft);  

  var countdown = setInterval(function(){
    secondsLeft--;
    console.log(secondsLeft);
    quizTimer.innerHTML = `Time: ${secondsLeft}`;
    if (secondsLeft === 0){
      console.log("time's up!");
      clearInterval(countdown);
      // go to the show your score and put your name in screen
      gameOver();
    } else {
      // keep going
    }
   
  }, 1000);
  quizRunner();
  
}

function quizRunner(){

  // console.log("You are in quizRunner");

  // clears out title and instructions  
  quizTitle.textContent = "";
  quizInst.textContent = "";  

  // populate the quiz question AND get the answers as buttons  
  allQuestions[currentQuestion]  
  questionNum.textContent = `Question: ${currentQuestion+1}`;  
  quizQuestion.textContent = allQuestions[0].questionText;

  // console.log(quizQuestion)

  // displays the question answers from the array
  for (i=0; i<allQuestions[0].answer.length; i++){
    createButton(allQuestions[0].answer[i]);  
    
    // console.log(allQuestions[0].answer.length);   <-- this made a button, but I moved it to a separate function called "createButton"
    // quizButton.textContent = allQuestions[0].answer[i];
    // quizAnswers.appendChild(quizButton);    
    
  }  
  console.log(window);
  checkAnswers(); // <-- check which button the user clicked and deduct time or praise them
}

function checkAnswers(){ 
  // This function will check the answer to see if it's correct or incorrect. Both of them go back to the quizRunner (somehow)
     // check out lesson 19 for thet stuff to do this part
}


function createButton(theText){

  // console.warn("You are in createButton()");
  // console.warn(theText);

  let myBtn = document.createElement('button');
  myBtn.innerText = theText;
  console.warn(myBtn);
  quizAnswers.appendChild(myBtn);  
}


function gameOver(){
  console.log("You are in gameOver()");
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