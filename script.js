let questionNumber = 0;
let correctCount = 0;
const quizQuestions = [
    {
        question: "30+40",
        a: "20",
        b: "40",
        c: "70",
        answer: "c"
    },
    {
        question: "8/4+2",
        a: "1.3333",
        b: "4",
        c: "3"
    }
];

function getElement(x) {
    return document.querySelector(x);
}

function displayQuestions (){
    let answers = get("#questionsAnswers");
    if(questionNumber >= quizQuestions.length){
        answers.innerHTML = `<h2>You got ${correctCount} of ${quizQuestions.length} questions correct</h2>`;
        get("#questionsResults").innerHTML = "All done";
        questionNumber = 0;
        correctCount = 0;
        return false;
    }
}