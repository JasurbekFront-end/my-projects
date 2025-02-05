// src/ui.ts
var number1Elm = document.querySelector("#number1");
var number2Elm = document.querySelector("#number2");
var operationElm = document.querySelector("#operation");
var answerBtns = document.querySelectorAll("button");
function renderQuiz(question) {
  renderQuestion(question);
  renderAnswers(question);
}
function renderQuestion(question) {
  number1Elm.innerText = question.number1.toString();
  number2Elm.innerText = question.number2.toString();
  operationElm.innerText = question.operation;
}
function renderAnswers(question) {
  const { answers, correctAnswer } = question;
  for (let i = 0;i < answers.length; i++) {
    const answerBtn = answerBtns[i];
    const answer = answers[i];
    answerBtn.innerText = answer.toString();
    const isCorrect = answer === correctAnswer;
    answerBtn.onclick = () => {
      const className = isCorrect ? "bg-green-400" : "bg-red-400";
      answerBtn.classList.replace("bg-blue-400", className);
      setTimeout(() => {
        answerBtn.classList.replace(className, "bg-blue-400");
        init();
      }, 1000);
    };
  }
}

// src/constants.ts
var MAX_NUMBER = 100;
var ANSWER_INTERVAL = 20;

// src/utils.ts
function generateNumber(maxNumber) {
  const number = Math.floor(Math.random() * maxNumber);
  return number;
}
function generateOperation() {
  const operations = ["*", "+", "-"];
  const randomIdx = generateNumber(operations.length);
  const operation = operations[randomIdx];
  return operation;
}
function calculateAnswer(number1, number2, operation) {
  let answer = 0;
  switch (operation) {
    case "+":
      answer = number1 + number2;
      break;
    case "-":
      answer = number1 - number2;
      break;
    case "*":
      answer = number1 * number2;
      break;
    default:
      break;
  }
  return answer;
}
function generateAnswers(correctAnswer) {
  const answers = [correctAnswer];
  for (let i = 0;i < 3; i++) {
    const randomAnswer = generateNumber(correctAnswer + ANSWER_INTERVAL);
    if (answers.includes(randomAnswer)) {
      i--;
      continue;
    }
    answers.push(randomAnswer);
  }
  return answers.sort(() => Math.random() - 0.5);
}
function generateQuestion() {
  const number1 = generateNumber(MAX_NUMBER);
  const number2 = generateNumber(MAX_NUMBER);
  const operation = generateOperation();
  const correctAnswer = calculateAnswer(number1, number2, operation);
  const answers = generateAnswers(correctAnswer);
  const question = { number1, number2, operation, correctAnswer, answers };
  return question;
}

// src/index.ts
var questions = [];
function init() {
  const question = generateQuestion();
  questions.push(question);
  renderQuiz(question);
}
init();
export {
  init
};
