import type { Question } from './types';
import { renderQuiz } from './ui';
import { generateQuestion } from './db';
const questions: Question[] = [];

export function init() {
  const question = generateQuestion();
  questions.push(question);
  renderQuiz(question);
}

window.addEventListener('load', init);
