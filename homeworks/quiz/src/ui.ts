import type { Question } from './types';

const number1Elm: HTMLParagraphElement = document.querySelector('p')!;

function renderQuestion(question: Question) {
	number1Elm.innerText = question.number1.toString();
}
