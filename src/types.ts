export type Player = 'X' | 'O';
export type Board = (Player | null)[];
export type State = {
  winner: Player | null;
  currentStep: number;
  histories: Board[];
};
