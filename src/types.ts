export type Player = 'X' | 'O';
export type Board = (Player | null)[];
export type State = {
  currentStep: number;
  histories: Board[];
};

export type Status = {
  winner: Player | null;
  isDraw: boolean;
};
