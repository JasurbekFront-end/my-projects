import { boardElms } from './elements';
import type { Sudoku } from './types';

const sudoku: Sudoku = [
  [null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null]
];

function handleCell(boardIdx: number, cellIdx: number) {
  console.log({ boardIdx, cellIdx });
}

for (let boardIdx = 0; boardIdx < sudoku.length; boardIdx++) {
  const board = sudoku[boardIdx];
  const boardElm = boardElms[boardIdx];

  for (let cellIdx = 0; cellIdx < board.length; cellIdx++) {
    const cell = board[cellIdx];
    const cellElm = boardElm.children[cellIdx] as HTMLButtonElement;

    cellElm.innerText = `${boardIdx}-${cellIdx}`;

    cellElm.addEventListener('click', () => handleCell(boardIdx, cellIdx));
  }
}
