export type Type = 'POMODORO' | 'SHORT_BREAK' | 'LONG_BREAK';

export type State = {
  type: Type;
  currentTime: number;
  intervalId: NodeJS.Timer | null;
};
