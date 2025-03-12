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

const rowIdxes = {
  0: [0, 1, 2],
  1: [0, 1, 2],
  2: [0, 1, 2],
  3: [3, 4, 5],
  4: [3, 4, 5],
  5: [3, 4, 5],
  6: [6, 7, 8],
  7: [6, 7, 8],
  8: [6, 7, 8]
};

const colIdxes = {
  0: [0, 3, 6],
  3: [0, 3, 6],
  6: [0, 3, 6],
  1: [1, 4, 7],
  4: [1, 4, 7],
  7: [1, 4, 7],
  2: [2, 5, 8],
  5: [2, 5, 8],
  8: [2, 5, 8]
};

function handleCell(boardIdx: number, cellIdx: number) {
  boardElms.forEach(boardElm => {
    Array.from(boardElm.children).forEach(cellElm => cellElm.classList.remove('active'));
  });

  const activeRowBoardIdxes = rowIdxes[boardIdx as keyof typeof rowIdxes];
  const activeColumnBoardIdxes = colIdxes[boardIdx as keyof typeof rowIdxes];

  const activeRowCellIdxes = rowIdxes[cellIdx as keyof typeof rowIdxes];
  const activeColumnCellIdxes = colIdxes[cellIdx as keyof typeof rowIdxes];

  for (let activeBoardIdx of activeRowBoardIdxes) {
    const activeBoardElam = boardElms[activeBoardIdx];
    for (let activeCellIdx of activeRowCellIdxes) {
      const activeCellElm = activeBoardElam.children[activeCellIdx] as HTMLButtonElement;
      activeCellElm.classList.add('active');
    }
  }

  for (let activeBoardIdx of activeColumnBoardIdxes) {
    const activeBoardElam = boardElms[activeBoardIdx];
    for (let activeCellIdx of activeColumnCellIdxes) {
      const activeCellElm = activeBoardElam.children[activeCellIdx] as HTMLButtonElement;
      activeCellElm.classList.add('active');
    }
  }

  const boardElm = boardElms[boardIdx];
  for (let cellIdx = 0; cellIdx < 9; cellIdx++) {
    const cellElm = boardElm.children[cellIdx] as HTMLButtonElement;
    cellElm.classList.add('active');
  }
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
