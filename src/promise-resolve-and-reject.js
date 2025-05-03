// const p = new Promise(resolve => resolve(20));
// console.log(p);

// /* Promise.resolve */
// const p1 = Promise.resolve(20);
// console.log(p1);

// const p2 = Promise.reject('Something error');
// p.then(
//   value => console.log(value),
//   error => console.error(error)
// );
// p1.then(value => console.log(value));
// p2.catch(error => console.error(error));

// const p = Promise.resolve(20);
// const DEFAULT_VALUE = 10;

// p.then(
//   value => {
//     console.log('FIRST FULFILLED = ', value);
//     return Promise.resolve(10 * value);
//   },
//   error => {
//     console.error('FIRST REJECTED = ', error);

//     return Promise.resolve(DEFAULT_VALUE);
//   }
// )
//   .then(
//     value => {
//       console.log('SECOND FULFILLED = ', value);
//       return Promise.resolve(10 * value);
//     },
//     error => {
//       console.error('SECOND REJECTED = ', error);
//     }
//   )
//   .then(
//     value => {
//       console.log('THIRD FULFILLED = ', value);
//       return Promise.reject('Something error');
//     },
//     error => {
//       console.error('THIRD REJECTED = ', error);
//     }
//   )
//   .catch(error => {
//     console.error('ANY REJECTED = ', error);
//   });
