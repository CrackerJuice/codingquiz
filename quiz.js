
var questions = [
    {
        question: "Which of the following is a JavaScript data type?",
        choices: ["String", "Number", "Boolean", "Array"],
        answer: "String"
    },
    {
        question: "What is the syntax for creating a function in JavaScript?",
        choices: ["function myFunction()", "function = myFunction()", "function: myFunction()", "myFunction()"],
        answer: "function myFunction()"
    },
    {
        question:"How do you link a JavaScript file in HTML?",
        choices: ["<javascript>", "<js>", "<script>", "<scripting>"],
        answer: "<script>"
    },
    {
        question: "How do you declare a variable in JavaScript?",
        choices: ["var", "let", "v", "variable"],
        answer: "var"
    },
    {
        question: "How do you make a single line comment in JavaScript?",
        choices: ["/**/", "//", "<!-- -->", "{}"],
        answer: "//"
    },
    {
        question: "What is a closure in JavaScript?",
        choices: ["A variable declared within a function", "A type of loop", "A function inside another function that has access to the outer function's variables", "A way to close a function"],
    },
    {
        question: "Which of the following is not a built-in JavaScript object?",
        choices: ["Array", "Math", "Date", "JSON"],
        answer: "JSON"
    },
    {
        question: "What does the NaN function do?",
        choices: ["Checks if a value is not a number", "Checks if a value is a number", "Converts a string into a number", "Rounds a number to the nearest integer"],
        answer: "Checks if a value is not a number"
    }

];

var currentQuestionIndex = 0;
var score = 0;
var timer = 60;
var timeInterval;

function displayQuestion() {
    var question = questions[currentQuestionIndex];
    var questionElement = document.getElementById("questions");
    questionElement.innerHTML = "<div class='question'>" + question.question + "</div>";

    var choicesElement = document.createElement("ul");
    choicesElement.classList.add("choices");

    for (var i = 0; i < question.choices.length; i++) {
        var choice = document.createElement("li");
        var input = document.createElement("input");
        input.type = "radio";
        input.name = "choice";
        input.value = question.choices[i];
        choice.appendChild(input);
        choice.appendChild(document.createTextNode(question.choices[i]));
        choicesElement.appendChild(choice);
    }

    questionElement.appendChild(choicesElement);
}

function startQuiz() {
    displayQuestion();
    timeInterval = setInterval(function () {
        timer--;
        document.getElementById("timer").textContent = timer;

        if (timer === 0) {
            endQuiz();
        }
    }, 1000);
}

function endQuiz() {
    clearInterval(timeInterval);
    var resultsElement = document.getElementById("results");
    resultsElement.innerHTML = "<h2>Quiz Results</h2><p>You scored " + score + "/" + questions.length + "</p>";
}

document.getElementById("answers").addEventListener("submit", function (event) {
    event.preventDefault();

    var selectedChoice = document.querySelector('input[name="choice"]:checked');

    if (selectedChoice) {
        if (selectedChoice.value === questions[currentQuestionIndex].answer) {
            score++;
        }

        currentQuestionIndex++;

        if (currentQuestionIndex < questions.length) {
            displayQuestion();
        } else {
            endQuiz();
        }
    }
});

startQuiz();
