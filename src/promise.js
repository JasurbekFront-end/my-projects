/* Promise */

// const p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const isShopOpen = true;
//     if (isShopOpen) resolve('🎁');
//     else reject('❌');
//   }, 2000);
// });

// console.log(p);

/* OSH challenge */
// function createOrder(name, count) {
//   const promise = new Promise((resolve, reject) => {
//     console.log(`LOADING: ${name} ${count} ...`);
//     setTimeout(() => {
//       const countOfFood = 20;
//       if (countOfFood >= count) {
//         resolve({ name, count });
//       } else {
//         reject(`${name} is not available, ${count - countOfFood} is not enough`);
//       }
//     }, 3000);
//   });

//   return promise;
// }

// function delivery(order) {
//   const address = 'PDP ACADEMY';
//   console.log('READY:', order);

//   const promise = new Promise((resolve, reject) => {
//     console.log(`Delivering to ${address}...`);
//     setTimeout(() => {
//       const isDelivered = true;
//       if (isDelivered) resolve({ order, address });
//       else reject(`${address} is not available`);
//     }, 3000);
//   });

//   return promise;
// }

// function eat(deliveredOrder) {
//   console.log('DELIVERED:', deliveredOrder);
// }

// const countOfStudents = 17;
// const orderPromise = createOrder('OSH', countOfStudents);

// orderPromise
//   .then(delivery)
//   .then(eat)
//   .catch(error => {
//     console.error(`ERROR: ${error}`);
//   });

// getGithubUser("arslonbekXX")
// .then(getRepos)
// .then(getBranches)
// .then(getCommits)
// .then(getFiles)
// .catch(error => {
//   console.log(first)
// })
