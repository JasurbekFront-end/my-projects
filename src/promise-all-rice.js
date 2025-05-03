// function getNumber(isReject = false) {
//   const delay = Math.floor(Math.random() * 5000);
//   const number = Math.floor(Math.random() * 100);

//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (isReject) reject(new Error('Something error'));
//       resolve(number);
//     }, delay);
//   });

//   return [promise, delay];
// }

// const count = 5;
// const promises = [];
// for (let i = 1; i <= count; i++) {
//   const [p, delay] = getNumber(i === 3);
//   console.log(`Promise[${i}][${delay}ms] is loading...`);
//   promises.push(p);
// }

// Promise.all(promises)
//   .then(values => {
//     console.log('ALL values = ', values);
//   })
//   .catch(error => {
//     console.error('ALL error = ', error);
//   });

// Promise.race(promises).then(value => {
//   console.log('RACE value = ', value);
// });

// Promise.allSettled(promises).then(values => {
//   console.log('ALLSETTLED values = ', values);
// });

function getNumber() {
  const number = Math.floor(Math.random() * 100);

  const promise = Promise.resolve(number);

  return promise;
}

function getNumber2() {
  const number = Math.floor(Math.random() * 100);

  return Promise.resolve(number);
}

const getNumber3 = async () => {
  const number = Math.floor(Math.random() * 100);

  return number;
};

console.log(getNumber());
console.log(getNumber2());
console.log(getNumber3());



