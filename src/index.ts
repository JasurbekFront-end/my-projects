import { types } from './constants';
import { btns, startPauseBtn, timerElm } from './elements';
import type { State, Type } from './types';

let state: State = {
  type: 'POMODORO',
  currentTime: types.POMODORO.time,
  intervalId: null
};

// HANDLE FUNCTIONS
function handleChangeType(e: MouseEvent) {
  const btn = e.target as HTMLButtonElement;
  const newType = btn.dataset.type as Type;

  btns.forEach(btn => btn.classList.remove('btn-active'));
  btn.classList.add('btn-active');
  state.type = newType;

  restartTimer();
}

function handleStartPause(e: MouseEvent) {
  const currentBtn = e.target as HTMLButtonElement;
  if (state.intervalId) {
    clearInterval(state.intervalId);
    state.intervalId = null;
    currentBtn.innerText = 'Start';
  } else {
    startTimer();
    currentBtn.innerText = 'Pause';
  }
}
// UI FUNCTIONS

function renderTimer(minute: number, second: number) {
  const minuteWithPrefix = minute.toString().padStart(2, '0');
  const secondWithPrefix = second.toString().padStart(2, '0');
  timerElm.innerText = `${minuteWithPrefix}:${secondWithPrefix}`;
}

function restartTimer() {
  const { time, parentClassName } = types[state.type];

  // Replace the body bg color
  document.body.className = parentClassName;

  // Reset the current time
  state.currentTime = time;

  // Reset the startPauseBtn text
  startPauseBtn.innerText = 'Start';

  // Clear the interval
  clearInterval(state.intervalId!);
  state.intervalId = null;

  // Reset timer UI
  const [minute, second] = calcTimer();
  renderTimer(minute, second);
}

// LOGIC FUNCTIONS
function startTimer() {
  state.intervalId = setInterval(() => {
    const [minute, second] = calcTimer();
    renderTimer(minute, second);
  }, 10);
}

function calcTimer() {
  const second = state.currentTime % 60;
  const minute = Math.floor(state.currentTime / 60);

  if (state.currentTime === 0) {
    clearInterval(state.intervalId!);
    state.intervalId = null;
  }

  state.currentTime--;
  return [minute, second];
}

function addListeners() {
  btns.forEach(btn => btn.addEventListener('click', handleChangeType));
  startPauseBtn.addEventListener('click', handleStartPause);
}

function init() {
  addListeners();
}

window.addEventListener('load', init);
