const introBoard = document.querySelector('#intro-board');
const quizBoard = document.querySelector('#quiz-board');
const highScoreBoard = document.querySelector('#high-score-board');
const goToHiScore = document.querySelector('#go-to-hiscore');
const quizTitle = document.querySelector('#title');
const quizInst = document.querySelector('#instructions');
const quizQuestion = document.querySelector('#question');
const questionNum = document.querySelector('#questionNum');
const quizAnswers = document.querySelector('#answers');
const quizTimer = document.querySelector('#timer');
const highScores = document.querySelector('highscores')
const startButton = document.querySelector('#start');
const quizFeedback = document.querySelector('#feedback');
const highScoreEntry = document.querySelector('#high-score-entry');
const highScorePrompt = document.querySelector('#high-score-prompt');
const highScoreField = document.querySelector('#entry-field');
const submitButton = document.querySelector('#submit-button');
const highScoreLine = document.querySelector('#high-score-line');
const retakeQuiz = document.querySelector('#retake-quiz');
const clearHiScores = document.querySelector('#clear-hiscores');

// idea: when styling everything, put each screen in its own div. then you can just turn off the div itself and not all of the elements. (this borked everything lol)

let quizButton = document.createElement("button");
let currentScore = 0;
let currentQuestion = 0;
let secondsLeft = 100;

var allQuestions = [
  // {questionText: "How many licks does it take to get to the center of a Tootsie Roll Pop?", answer:["One", "Three", "Two"],correctAnswer: 1},
  // {questionText: "Babylon 5 aired on what network originally?", answer:["The History Channel", "The WB", "PTEN"], correctAnswer: 2},
  // {questionText: "In Star Trek IV: The Voyage Home, how did Spock feel?", answer:["Fine", "A little mad", "Total zen"], correctAnswer: 0},
  // {questionText: "What class of ship was the Serenity?", answer:["Big Ship", "Broadsword", "Hauler", "Firefly"], correctAnswer: 3},
  {questionText: "How many licks does it take to get to the center of a Tootsie Roll Pop?", answer:["What5!!!", "Where5", "Why5"], correctAnswer: 0},
  {questionText: "How many licks does it take to get to the center of a Tootsie Roll Pop?", answer:["What6!!!", "Where6", "Why6"], correctAnswer: 0}
]

let hiScores = localStorage.getItem("playerScoreEntry");
if (hiScores == null) {
  hiScores = [];
  // do stuff
} else {
  hiScores = JSON.parse(hiScores);
}

console.log(hiScores);  
// console.warn(hiScores);

goToHiScore.textContent = 'View Highscores';
goToHiScore.addEventListener('click', function(){
  introBoard.classList.add('hidden');

  displayHighScores();

})

function introPage(){   
  // primary intro page
  
  introBoard.classList.remove('hidden');
  quizTitle.textContent = 'Geeks and Non-Geeks Quiz';
  // submitButton.classList.add('hidden');

    // console.log(quizTitle)
  quizTimer.textContent = `Time: ${secondsLeft}`;
  quizInst.textContent = "Try to answer the following questions about geeky things within the time limit. Keep in mind that incorrect answers will penalize your scoretime by ten seconds!"
  startButton.textContent = "Start!"    
  startButton.addEventListener("click", handleStartButtonClick);
  
}
function handleStartButtonClick(){
  startButton.classList.add('hidden');    
  startTimer();
}

// dev notes:
// where am I in the quiz? pre/in/results
// in the quiz, what's gong on? the timer and the score
// things that are happening in the one question


function startTimer(){ 
  // console.warn(secondsLeft);    
  var countdown = setInterval(function(){
    secondsLeft--;
    // console.log(secondsLeft);
    quizTimer.innerHTML = `Time: ${secondsLeft}`;
    if (secondsLeft <= 0){
      // console.log("time's up!");
      quizTimer.textContent = `Time: 0`;
      clearInterval(countdown);
      // go to the show your score and put your name in screen
      gameOver();
    } else {
      // keep going
    }
    
  }, 1000);
  quizRunner();
  // also put in if you're out of questions in line 79
}

function quizRunner(){  
  quizBoard.classList.remove('hidden');
  introBoard.classList.add('hidden');

  // trying to get the quiz to end after you run out of questions
  console.warn(allQuestions.length);
  console.warn(allQuestions[currentQuestion], currentQuestion);
  if (allQuestions[currentQuestion] == allQuestions.length-1){
    console.log("it's over!");
    gameOver();
  };  
  
  // console.log("You are in quizRunner");
  // populate the quiz question AND get the answers as buttons  
  allQuestions[currentQuestion]  
  questionNum.textContent = `Question: ${currentQuestion+1}`;  
  quizQuestion.textContent = allQuestions[currentQuestion].questionText;
  
  // console.log(quizQuestion)
  
  quizAnswers.innerHTML = '';
  // displays the question answers from the array
  for (i=0; i<allQuestions[currentQuestion].answer.length; i++){
    let myBtn = document.createElement('button');
    myBtn.innerText = allQuestions[currentQuestion].answer[i];
    
    if(i === allQuestions[currentQuestion].correctAnswer){
      myBtn.setAttribute("correct",true)
      
    }
    // console.warn(myBtn);
    // myBtn.addEventListener('mouseover', function(){
    //   myBtn.setAttribute("style", "background-color:rgb(255, 156, 156) box-shadow: 0 12px 16px 0 rgba(0,0,0,0.5), 0 17px 50px 0 rgba(0,0,0,0.5);")
    // })
    myBtn.addEventListener("click", checkAnswers)
    quizAnswers.appendChild(myBtn);  
  }  
  // console.log(window);
}



function checkAnswers(event){ 
  // checks the answer to see if it's right or wrong and adjusts score or time accodingly
  event.preventDefault()
  console.warn(quizFeedback);
  quizFeedback.classList.remove('hidden');    
  // console.log(event.target)
  // console.log(event)
  if(event.target.hasAttribute("correct")){
    // console.log("Great!")
    // updates the score
    currentScore++;
    quizFeedback.textContent = "Correct!";
  } else{
    // console.log("WRONG")    
    secondsLeft-=10;  
    
    quizFeedback.textContent = "Nope!";
  } 

  currentQuestion++;
  quizRunner();
}

function gameOver(){ 
  const quizIsOver = document.querySelector('#quiz-is-over');
  const finalScoreIs = document.querySelector('#final-score');
  
  console.log("You are in gameOver()");
  quizBoard.classList.add('hidden');
  highScoreEntry.classList.remove('hidden');
  

  // adds the submit button back onto the page
  submitButton.classList.remove('hidden');
  submitButton.enable;
  

  // console.log(submitButton);

  quizIsOver.textContent = "The Quiz is over!";
  finalScoreIs.textContent = `Your final score is: ${currentScore}`; 
  highScorePrompt.textContent = "Enter your initials and click Submit";
  highScoreField.classList.remove('hidden'); 
  highScoreField.value = '';
  // listens for the user to click the submit button to store in an object
  submitButton.removeEventListener("click", handleSubmitButtonClick);
  submitButton.addEventListener("click", handleSubmitButtonClick);
}

function handleSubmitButtonClick(event){
  scoreAttempt = {
    playerInitials: highScoreField.value,
    playerScore: currentScore,
  }    
  event.preventDefault();
  // adds object to the array to store locally
  hiScores.push(scoreAttempt);
  localStorage.setItem("playerScoreEntry" , JSON.stringify(hiScores));
  displayHighScores();  
}

function displayHighScores(){
  console.log("you are in display high scores");
  highScoreEntry.classList.add('hidden');
  highScoreBoard.classList.remove('hidden');
  highScoreLine.textContent = ``;
  
  // displays the high score list
  
  // runs through the high scores stored in local memory and displays them
  for (i=0; i<hiScores.length; i++){  
    let myHiScore = document.createElement('li');
    myHiScore.textContent = `Score: ${hiScores[i].playerScore} -  ${hiScores[i].playerInitials}`;
    highScoreLine.appendChild(myHiScore);    
  }  
  
  clearHiScores.addEventListener('click', function() {
    localStorage.clear();
    secondsLeft = 100; 
    highScoreBoard.classList.add('hidden'); 
    startButton.classList.remove('hidden');
    introPage();
    // for (i=0; i<hiScores.length; i++){  
      //   let myHiScore = document.createElement('li');
      //   myHiScore.textContent = ``;
      //   highScoreLine.appendChild(myHiScore);    
      //   displayHighScores()
    // }  
  });
  
  
  
  // adds the event listener to trigger handleRetakeQuizClick
  retakeQuiz.addEventListener('click', handleRetakeQuizClick);
  
};
  

function handleRetakeQuizClick(){
  secondsLeft = 100;
  quizTimer.textContent = `Time: ${secondsLeft}`;
  restartQuiz();    
}

  
  
  
function restartQuiz (){
  retakeQuiz.removeEventListener('click', handleRetakeQuizClick);
  highScoreBoard.classList.add('hidden');
  // document.location.reload();
  currentQuestion = 0;
  currentScore = 0;
  secondsLeft = 100;
  startTimer(); 
  
}

introPage();

















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