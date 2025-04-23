/* Lexical environment */
// {
//   {
//     {
//       var a = 40;
//       console.log(a);
//     }
//     console.log(a);
//   }
//   console.log(a);
// }

// function createCounter(initialValue: number) {
//   let count = initialValue;

//   return function () {
//     count++;
//     return count;
//   };
// }

// const counter = createCounter(100);
// console.dir(counter);
// console.log(counter());
// console.log(counter());
// console.log(counter());

// function createMessenger(from: string) {
//   const message = 'Hi';

//   return function (name: string) {
//     return `${message} ${name} from ${from}`;
//   };
// }

// const messenger = createMessenger('Sherlock');
// console.dir(messenger);
// console.log(messenger('Kent'));
// console.log(messenger('Mark'));
// console.log(messenger('John'));

// function createStore(initialValue: number) {
//   const state = {
//     count: initialValue
//   };

//   return {
//     getState() {
//       return state;
//     },
//     increment() {
//       state.count++;
//     },
//     decrement() {
//       state.count--;
//     }
//   };
// }

// const store = createStore(10);
// console.log(store.getState());
// store.increment();
// console.log(store.getState());
// store.decrement();
// store.decrement();
// store.decrement();
// store.decrement();
// store.decrement();
// console.log(store.getState());

// function once(func: any) {
//   let callCount = 0;
//   let value: any;
//   return function (num: any) {
//     if (callCount === 0) {
//       callCount++;
//       value = func(num);
//       return value;
//     }

//     return value;
//   };
// }

// /*** Uncomment these to check your work! ***/
// const onceFunc = once(() => {});
// console.dir(onceFunc);
// console.log(onceFunc(4)); // => should log 6
// console.log(onceFunc(10)); // => should log 6
// console.log(onceFunc(9001)); // => should log 6
