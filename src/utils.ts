import { ANSWER_INTERVAL, MAX_NUMBER } from './constants';
import type { Operation, Question } from './types';

export function generateNumber(maxNumber: number): number {
  const number = Math.floor(Math.random() * maxNumber);

  return number;
}

export function generateOperation() {
  const operations: Operation[] = ['*', '+', '-'];
  const randomIdx = generateNumber(operations.length); // 0, 1, 2
  const operation = operations[randomIdx];

  return operation;
}

export function calculateAnswer(number1: number, number2: number, operation: Operation) {
  let answer = 0;

  switch (operation) {
    case '+':
      answer = number1 + number2;
      break;
    case '-':
      answer = number1 - number2;
      break;
    case '*':
      answer = number1 * number2;
      break;
    default:
      break;
  }

  return answer;
}

export function generateAnswers(correctAnswer: number) {
  const answers = [correctAnswer];

  for (let i = 0; i < 3; i++) {
    const randomAnswer = generateNumber(correctAnswer + ANSWER_INTERVAL); // ⏰
    if (answers.includes(randomAnswer)) {
      i--;
      continue;
    }

    answers.push(randomAnswer);
  }

  return answers.sort(() => Math.random() - 0.5);
}

export function generateQuestion() {
  const number1 = generateNumber(MAX_NUMBER);
  const number2 = generateNumber(MAX_NUMBER);
  const operation = generateOperation();
  const correctAnswer = calculateAnswer(number1, number2, operation);
  const answers = generateAnswers(correctAnswer);
  const question: Question = { number1, number2, operation, correctAnswer, answers };

  return question;
}
