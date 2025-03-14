import type { Question } from './types';
import { init } from './index';

const number1Elm: HTMLSpanElement = document.querySelector('#number1')!;
const number2Elm: HTMLSpanElement = document.querySelector('#number2')!;
const operationElm: HTMLSpanElement = document.querySelector('#operation')!;
const answerBtns = document.querySelectorAll('button');

export function renderQuiz(question: Question) {
  renderQuestion(question);
  renderAnswers(question);
}

function renderQuestion(question: Question) {
  number1Elm.innerText = question.number1.toString();
  number2Elm.innerText = question.number2.toString();
  operationElm.innerText = question.operation;
}

function renderAnswers(question: Question) {
  const { answers, correctAnswer } = question;

  for (let i = 0; i < answers.length; i++) {
    const answerBtn = answerBtns[i];
    const answer = answers[i];

    // Render answer button inner text
    answerBtn.innerText = answer.toString(); // button.innerText  = 20
    const isCorrect = answer === correctAnswer;

    answerBtn.onclick = () => {
      const className = isCorrect ? 'bg-green-400' : 'bg-red-400';
      answerBtn.classList.replace('bg-blue-400', className);

      setTimeout(() => {
        answerBtn.classList.replace(className, 'bg-blue-400');
        init();
      }, 1000);
    };
  }
}
