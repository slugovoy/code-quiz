questionNumber = 0;
correctCount = 0;
answers = "";

questionN = "";
choiceA = "";
choiceB = "";
choiceC = "";
let choices = "";
let choice = "";

const quizQuestions = [
  {
    question: "30+40",
    a: "20",
    b: "40",
    c: "70",
    answer: "C",
  },
  {
    question: "8/4+2",
    a: "1.3333",
    b: "4",
    c: "3",
    answer: "B",
  },
];

function getElement(x) {
  return document.getElementById(x);
}

function displayQuestions() {
  answers = getElement("questionsAnswers");
  if (questionNumber >= quizQuestions.length) {
    answers.innerHTML = "<h2>You got "+correctCount+" of "+quizQuestions.length+" questions correct</h2>";
    getElement("questionsResults").innerHTML = "All done";
    questionNumber = 0;
    correctCount = 0;
    return false;
  }

  getElement("questionsResults").innerHTML = "Question "+(questionNumber+1)+" of "+quizQuestions.length;

  questionN = quizQuestions[questionNumber].question;
  choiceA = quizQuestions[questionNumber].a;
  choiceB = quizQuestions[questionNumber].b;
  choiceC = quizQuestions[questionNumber].c;

  answers.innerHTML = "<h3>"+questionN+ "<h3>";

  //   answers.innerHTML += "<button id='choices'>" + choiceA + "</button>";
  //   answers.innerHTML += "<button id='choices'>" + choiceB + "</button>";
  //   answers.innerHTML += "<button id='choices'>" + choiceC + "</button>";
  //   answers.innerHTML +=
  //     "<button onclick='checkAnswers()'>Submit Answer</button>";
  answers.innerHTML +=
    "<label> <input type='radio' name='choices' value='A'> " +
    choiceA +
    "</label><br>";
  answers.innerHTML +=
    "<label> <input type='radio' name='choices' value='B'> " +
    choiceB +
    "</label><br>";
  answers.innerHTML +=
    "<label> <input type='radio' name='choices' value='C'> " +
    choiceC +
    "</label><br><br>";
  answers.innerHTML += "<button onclick='checkAnswers()'>Submit Answer</button>";
}
function checkAnswers() {
  choices = document.getElementsByName("choices");
  for (var j = 0; j < choices.length; j++) {
    if (choices[j].checked) {
      choice = choices[j].value;
    }
  }
  if (choice === quizQuestions[questionNumber].answer) {
    correctCount++;
  }
  questionNumber++;
  displayQuestions();
}
window.addEventListener("load", displayQuestions);
