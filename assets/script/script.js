const quizTitle = document.querySelector("#title");
const quizInst = document.querySelector("#instructions");
const quizQuestion = document.querySelector("#question");
const questionNum = document.querySelector("#questionNum");
const quizAnswers = document.querySelector("#answers");
const quizTimer = document.querySelector("#timer");
const highScores = document.querySelector('highscores')
const startButton = document.querySelector("#start");
const quizFeedback = document.querySelector("#feedback");
const highScoreEntry = document.querySelector("#high-score-entry")
const highScorePrompt = document.querySelector("#high-score-prompt")
const highScoreField = document.querySelector("#entry-field");
const submitButton = document.querySelector("#submit-button");



let quizButton = document.createElement("button");
let currentScore = 0;
let secondsLeft = 20;
let currentQuestion = 0;

var allQuestions = [
  {questionText: "How many licks does it take to get to the center of a Tootsie Roll Pop?", answer:["What1", "Where1!!!", "Why1"],correctAnswer: 1},
  {questionText: "How many licks does it take to get to the center of a Tootsie Roll Pop?", answer:["What2", "Where2", "Why2!!!"], correctAnswer: 2},
  {questionText: "How many licks does it take to get to the center of a Tootsie Roll Pop?", answer:["What3!!!", "Where3", "Why3"], answer3: "Why3", correctAnswer: 0},
  {questionText: "How many licks does it take to get to the center of a Tootsie Roll Pop?", answer:["What4!!!", "Where4", "Why4"], answer3: "Why3", correctAnswer: 0},
  {questionText: "How many licks does it take to get to the center of a Tootsie Roll Pop?", answer:["What5!!!", "Where5", "Why5"], answer3: "Why3", correctAnswer: 0},
  {questionText: "How many licks does it take to get to the center of a Tootsie Roll Pop?", answer:["What6!!!", "Where6", "Why6"], answer3: "Why3", correctAnswer: 0}
]


function introPage(){

  // console.log(allQuestions)  
  // console.warn("yo!");

  // primary intro page
  quizTitle.textContent = 'Geeks and Non-Geeks Quiz';
  submitButton.remove();
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
    if (secondsLeft <= 0){
      console.log("time's up!");
      quizTimer.textContent = `Time: 0`;
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
  quizAnswers.textContent = "";

  // populate the quiz question AND get the answers as buttons  
  allQuestions[currentQuestion]  
  questionNum.textContent = `Question: ${currentQuestion+1}`;  
  quizQuestion.textContent = allQuestions[currentQuestion].questionText;

  // console.log(quizQuestion)

  // displays the question answers from the array
  for (i=0; i<allQuestions[currentQuestion].answer.length; i++){
    let myBtn = document.createElement('button');
    myBtn.innerText = allQuestions[currentQuestion].answer[i];
    if(i === allQuestions[currentQuestion].correctAnswer){
      myBtn.setAttribute("correct",true)
    }
    // console.warn(myBtn);
    myBtn.addEventListener("click", checkAnswers)
    quizAnswers.appendChild(myBtn);  
    
    // console.log(allQuestions[0].answer.length);   <-- this made a button, but I moved it to a separate function called "createButton"
    // quizButton.textContent = allQuestions[0].answer[i];
    // quizAnswers.appendChild(quizButton);    
    
  }  
  console.log(window);
}

function checkAnswers(event){ 
  event.preventDefault()
  console.log(event.target)
  console.log(event)
  if(event.target.hasAttribute("correct")){
    console.log("Great!")
    currentScore++;
    quizFeedback.textContent = "Correct!";
    // update the score
  } else{
    console.log("WRONG")    
    secondsLeft-=10;  
    quizFeedback.textContent = "Nope!";

    
    //decraese the timer
  } 
  currentQuestion++;
  quizRunner();

//   //we need to make sure we have questions and time left
//   if we do
//   // currentQuestion ++
//   quizRunner()
//  else{
//   endQuiz()
//  }
//   // This function will check the answer to see if it's correct or incorrect. Both of them go back to the quizRunner (somehow)
  // check out lesson 19 for thet stuff to do this part
  // when we're buliding the buttons, we need to ID the buttons when they're being built 


}


function gameOver(){
  quizQuestion.textContent = "";
  quizAnswers.textContent = "";
  questionNum.textcontent = "";
  quizFeedback.textContent = "";
  submitButton.enable;
  console.log(submitButton);
  submitButton.textContent = "Submit";
  console.log("You are in gameOver()");
  quizTitle.textContent = "The Quiz is over!";
  quizInst.textContent = `Your final score is: ${currentScore}`;
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