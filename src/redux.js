/*
 * @reducer - function
 * @initialState - object
 * @return { getState, dispatch, subscribe }
 */
function createStore(initialState, reducer) {
  let state = initialState;
  const listeners = [];

  function dispatch(action) {
    state = reducer(state, action);
    listeners.forEach(listener => listener());
  }

  function getState() {
    return state;
  }

  function subscribe(listener) {
    listeners.push(listener);

    return function () {
      const deleteIdx = listeners.findIndex(l => l === listener);
      listeners.splice(deleteIdx, 1);
    };
  }

  return { getState, dispatch, subscribe };
}

/*
 * @state - object
 * TYPE = "add" | "minus" | "reset"
 * @action - object { type: TYPE, payload?: number }
 */
function myReducer(state, action) {
  if (action.type === 'add') return { count: state.count + action.payload };
  if (action.type === 'minus') return { count: state.count - action.payload };
  if (action.type === 'reset') return { count: 0 };

  return state;
}

const store = createStore({ count: 0 }, myReducer);
const unsubscribe1 = store.subscribe(myListener1);
const unsubscribe2 = store.subscribe(myListener2);

function myListener1() {
  console.log('LISTENER-1: state = ', store.getState());
}
function myListener2() {
  console.log('LISTENER-2: state = ', store.getState());
}

console.log(store.getState()); // { count: 0 }
store.dispatch({ type: 'add', payload: 3 });

console.log(store.getState()); // { count: 3 }
store.dispatch({ type: 'add', payload: 3 });

console.log(store.getState()); // { count: 6 }
store.dispatch({ type: 'minus', payload: 5 }); //

console.log(store.getState()); // { count: 1 }
unsubscribe2();
store.dispatch({ type: 'reset' }); //

console.log(store.getState()); // { count: 0 }

/**
 * 1. createStore funksiyani yaratishiz kerak
 * 2. reducer funksiyani yaratishiz kerak
 * 3. subscribe funksiyani yaratishiz kerak
 * ------
 *  1. { count: 0 }
 *  2. LISTENER-1: state = { count: 3 }
 *  3. LISTENER-2: state = { count: 3 }
 *  4. { count: 3 }
 *  5. LISTENER-1: state = { count: 6 }
 *  6. LISTENER-2: state = { count: 6 }
 *  7. { count: 6 }
 *  8. LISTENER-1: state = { count: 1 }
 *  9. LISTENER-2: state = { count: 1 }
 * 10. { count: 1 }
 * 11. LISTENER-1: state = { count: 0 }
 * 12. LISTENER-2: state = { count: 0 }
 * 13. { count: 0 }
 */
