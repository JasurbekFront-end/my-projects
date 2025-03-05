import { getNextPlayer, nextMove, reset, state } from './db';
import { message, restartButton, squares } from './elements';

// Handle function
function handleSquare(moveIdx: number) {
  nextMove(moveIdx);
  renderTicTacToe();
}

function handleRestart(e: MouseEvent) {
  reset();
  renderTicTacToe();
}

// UI functions
function renderTicTacToe() {
  const board = state.histories[state.currentStep];
  squares.forEach((square, idx) => {
    square.textContent = board[idx];
  });

  message.innerText = state.winner ? 'Winner: ' + state.winner : 'Next Player: ' + getNextPlayer();
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
