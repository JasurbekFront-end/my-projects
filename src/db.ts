import type { Player, State } from './types';
export const state: State = {
  winner: null,
  currentStep: 0,
  histories: [new Array(9).fill(null)]
};

export function getNextPlayer() {
  const board = state.histories[state.currentStep];
  const filteredBoard = board.filter(Boolean);
  const nextPlayer: Player = filteredBoard.length % 2 === 0 ? 'X' : 'O';

  return nextPlayer;
}

export function nextMove(moveIdx: number) {
  if (state.winner) return;

  const board = [...state.histories[state.currentStep]];

  const isEmpty = board[moveIdx] === null;

  if (!isEmpty) return;

  const nextPlayer = getNextPlayer();
  board[moveIdx] = nextPlayer;

  state.histories.push(board);
  state.currentStep++;

  state.winner = checkWinner();
}

export function checkWinner() {
  const board = state.histories[state.currentStep];

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
      return board[a];
    }
  }

  return null;
}

export function reset() {
  state.histories = [new Array(9).fill(null)];
  state.currentStep = 0;
  state.winner = null;
}
