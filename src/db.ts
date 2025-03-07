import type { Player, State, Status } from './types';
export const state: State = {
  currentStep: 0,
  histories: [new Array(9).fill(null)]
};

export function getCurrentBoard() {
  const { currentStep, histories } = state;
  const currentBoard = histories[currentStep];
  return currentBoard;
}

export function getNextPlayer() {
  const board = getCurrentBoard();
  const filteredBoard = board.filter(Boolean);
  const nextPlayer: Player = filteredBoard.length % 2 === 0 ? 'X' : 'O';

  return nextPlayer;
}

export function nextMove(moveIdx: number) {
  const { winner } = getStatus();
  if (winner) return;

  const board = [...getCurrentBoard()];

  const isEmpty = board[moveIdx] === null;

  if (!isEmpty) return;

  const nextPlayer = getNextPlayer();
  board[moveIdx] = nextPlayer;

  state.histories.splice(state.currentStep + 1, Infinity, board);
  state.currentStep++;
}

export function changeStep(step: number) {
  state.currentStep = step;
}

export function getStatus() {
  const board = getCurrentBoard();
  const status: Status = { winner: null, isDraw: false };

  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      status.winner = board[a];
      return status;
    }
  }

  status.isDraw = board.every(Boolean);

  return status;
}

export function reset() {
  state.histories = [new Array(9).fill(null)];
  state.currentStep = 0;
  state.winner = null;
}
