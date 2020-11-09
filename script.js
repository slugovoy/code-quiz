// Global variables
const startBtn = document.querySelector("#start");
const startPrompt = document.querySelector("#start-prompt");
const questionBox = document.querySelector("#questionBox");
const questionText = document.querySelector("#question-text");
const answersBox = document.querySelector("#answers");
const timer = document.querySelector("#timer");
const formBox = document.querySelector("#form");
let time = document.querySelector("#time");
let finalScore = document.querySelector("#final-score");
let score = 0;
let correctScore = 0;
let fine = 10;
let timeTotal = 75;
// displaying current time on a screen
time.textContent = `${timeTotal} seconds left`;

// Array of object with question, answers and correct answer
const questions = [
  {
    questionText: "Commonly used data types DO NOT include:",
    answers: ["strings", "booleans", "alerts", "numbers"],
    correctIndex: 2,
  },
  {
    questionText:
      "The condition in an if / else statement is enclosed within ____.",
    answers: ["quotes", "curly brackets", "parentheses", "square brackets"],
    correctIndex: 2,
  },
  {
    questionText: "Arrays in Javascript can be used to store ____.",
    answers: [
      "numbers and strings",
      "other arrays",
      "booleans",
      "all of the above",
    ],
    correctIndex: 3,
  },
  {
    questionText:
      "String values must be enclosed within ____ when being assigned to variables.",
    answers: ["commas", "curly brackets", "quotes", "parenthesis"],
    correctIndex: 2,
  },
  {
    questionText:
      "A very useful tool for used during development and debugging for printing content to the debugger is:",
    answers: ["Javascript", "terminal / bash", "for loops", "console log"],
    correctIndex: 3,
  },
];
// Variable for question's index
let questionInd = 0;

// Event listeners for start button and answers
startBtn.addEventListener("click", startClick);
startBtn.addEventListener("click", startTimer);
answersBox.addEventListener("click", answerClick);

// hide first page and reveal questions
function startClick(event) {
  event.preventDefault();
  startPrompt.style.display = "none";
  questionBox.style.display = "block";

  startTimer();
  showQuestion();
}

// Variable for Correct/Wrong feedback
const correctWrong = document.createElement("p");
correctWrong.setAttribute("id", "correctWrong");

// 2 functions for displaying Correct/Wrong feedback
function hideResult() {
  correctWrong.style.display = "none";
}
function showResult() {
  correctWrong.removeAttribute("style");
}

// function responsible for changing questions and checking if they correct
function answerClick(event) {
  event.preventDefault();

  if (!event.target.matches("button")) return;

  let userAnswer = event.target.textContent;

  let question = questions[questionInd];
  let correctAnswer = question.answers[question.correctIndex];
//If answer correct place feedback
  if (userAnswer === correctAnswer) {
    correctScore++;
    correctWrong.textContent = "Correct answer!";
    questionBox.appendChild(correctWrong);
    setTimeout(hideResult, 800);
    showResult();
  } 
  // if answer is wrong place feedback and extract time from total time
  else {
    timeTotal = timeTotal - fine;
    correctWrong.textContent = "Wrong answer!";
    questionBox.appendChild(correctWrong);
    setTimeout(hideResult, 800);
    showResult();
  }
  questionInd++;
  // if no more questions end game
  if (questionInd >= questions.length) {
    clearInterval(startTimer);
    lastPage();
  } 
  // show next question
  else {
    showQuestion();
  }
}

// function for placing questions on a screen
function showQuestion() {
  let curQuestion = questions[questionInd];
  questionText.textContent = curQuestion.questionText;
  answersBox.innerHTML = "";

  // loop to iterate through answers and creating buttons for it
  for (let i = 0; i < curQuestion.answers.length; i++) {
    const answer = curQuestion.answers[i];
    const answerBtn = document.createElement("button");
    answerBtn.setAttribute("class", "answerBtn");
    answerBtn.textContent = answer;
    answersBox.appendChild(answerBtn);
  }
}

// function for running timer
function startTimer() {
  setInterval(function () {
    if (timeTotal > 0) {
      timer.textContent = `${timeTotal} seconds left`;
      timeTotal--;
      score = timeTotal;
    } else {
      clearInterval(startTimer);
      timer.textContent = " Your time is over!";
    }
  }, 1000);
}
// function for displaying last page
function lastPage() {
  let numberCorrectAnswers = document.querySelector("#numberCorrectAnswers");
  numberCorrectAnswers.textContent = `${correctScore}`;
  questionBox.style.display = "none";
  formBox.style.display = "block";
  timer.style.display = "none";
  finalScore.textContent = `${score}`;
}
// Variable for Start Over button
const startOverBtn = document.querySelector("#startOver");

// function for Start Over button that sends you to leader board
function startOver(event) {
  event.stopPropagation();
  window.location.replace("index.html");
}
startOverBtn.addEventListener("click", startOver);

// variable for submit button
const submitBtn = document.querySelector("#submit-btn");
submitBtn.addEventListener("click", submitInitials);

// function for submit button that sending data to local storage
function submitInitials(event) {
  event.preventDefault();
  let initials = document.querySelector("#initials");
  let initToSend = initials.value;
  let finalData = {
    init: initToSend,
    userscore: finalScore.textContent,
  };

  let highScores = JSON.parse(window.localStorage.getItem("allScores")) || [];

  highScores.push(finalData);

  localStorage.setItem("allScores", JSON.stringify(highScores));
}
