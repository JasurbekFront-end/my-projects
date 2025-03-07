import { changeStep, getCurrentBoard, getNextPlayer, getStatus, nextMove, reset, state } from './db';
import { historiesElm, message, restartButton, squares } from './elements';

// Handle function
function handleSquare(moveIdx: number) {
  nextMove(moveIdx);
  renderTicTacToe();
}

function handleRestart(e: MouseEvent) {
  reset();
  renderTicTacToe();
}

function handleHistory(step: number) {
  changeStep(step);
  renderTicTacToe();
}

// UI functions
function renderTicTacToe() {
  const { currentStep, histories } = state;
  const { winner, isDraw } = getStatus();
  const board = getCurrentBoard();

  squares.forEach((square, idx) => {
    square.textContent = board[idx];
  });

  if (winner) {
    message.innerText = `Winner: ${winner}`;
  } else if (isDraw) {
    message.innerText = `Draw!`;
  } else {
    message.innerText = `Next Player: ${getNextPlayer()}`;
  }

  historiesElm.innerHTML = '';
  for (let i = 0; i < histories.length; i++) {
    const btn = document.createElement('button');
    const innerText = i === 0 ? 'Go to game start' : `Go to move #${i}`;
    btn.textContent = innerText;
    btn.disabled = i === currentStep;
    btn.addEventListener('click', () => handleHistory(i));
    historiesElm.append(btn);
  }
}

// Logic Function
function addListeners() {
  squares.forEach((square, idx) => {
    square.addEventListener('click', () => handleSquare(idx));
  });
  restartButton.addEventListener('click', handleRestart);
}

function init() {
  renderTicTacToe();
  addListeners();
}

window.addEventListener('load', init);
