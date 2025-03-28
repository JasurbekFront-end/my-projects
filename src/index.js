/* Object.keys and Object.values */
// const animal = {
//   name: 'Dog',
//   color: 'black'
// };

// const keys = Object.keys(animal);
// console.log('keys = ', keys);

// const values = Object.values(animal);
// console.log('values = ', values);

/* KEY IN */
// function display(data, keys) {
//   for (const key of keys) {
//     const value = key in data ? data[key] : null;
//     console.log(`data[${key}] = ${value}`);
//   }
// }

// const obj = {
//   name: 'Boburbek',
//   phone: '123456789',
//   username: 'boburbekXX',
//   job: 'Teacher',
//   address: false
// };

// display(obj, ['salary', 'job', 'firstName', 'address']);

// /**
//  * data['salary'] = null;
//  * data['job'] = 'Teacher';
//  * data['firstName'] = null;
//  *
//  */

/* Object.entries */
// const box = {
//   name: 'Box-1',
//   size: 200,
//   color: 'red'
// };

// for (let key in box) {
//   console.log('key = ', key);
//   console.log('value = ', box[key]);
// }

// const entries = Object.entries(box);
// console.log(entries);

// for (const [key, value] of entries) {
//   console.log('key = ', key);
//   console.log('value = ', value);
// }

/* Object cloning */
// const person = {
//   name: 'Kent',
//   age: 20,
//   address: {
//     state: 'UZB',
//     city: 'Tashkent'
//   }
// };

// const person1 = Object.assign({}, person);
// person1.age = 40;
// person1.address.state = 'RUS';

// console.log('person = ', person);
// console.log('person1 = ', person1);

// function clone(target, source) {
//   for (let key in source) {
//     target[key] = source[key];
//   }

//   return target;
// }

// const student1 = { name: 'Nick', age: 20 };
// const student2 = clone({ job: 'Teacher' }, student1);

// console.log('student1 = ', student1);
// console.log('student2 = ', student2);
// 'use strict';
// const person = {
//   name: 'Kent',
//   age: 20,
//   getFullName() {
//     console.log('getFullName[this] = ', this);

//     const app = () => {
//       console.log('app[this] = ', this);
//     };

//     app(); // HM_0003()
//   }
// }; // SM_person = HM_0001

// person.getFullName(); //  HM_0001.HM_0002()
// /**
//  * HEAP MEMORY
//  *  address     |  value
//  *  HM_0001     |  { name: 'Kent', age: 20, getFullName: HM_0002 }
//  *  HM_0002     |  [f]
//  *  HM_0003     |  [f]
//  *
//  *
//  */

// const person = { name: 'Arslonbek' };
// const a = () => {
//   console.log(this);
// };

// function b() {
//   console.log(this);
// }

// a.call(person);
// // b.;

// const person = {
//   name: 'Kent',
//   age: 20,
//   run() {
//     console.log('run[this] = ', this);

//     const first = () => {
//       console.log('first[this] = ', this);

//       function second() {
//         console.log('second[this] = ', this);
//       }

//       const third = () => {
//         console.log('third[this] = ', this);
//       };

//       second();
//       third();
//     };

//     first();
//   }
// };

// person.run();

// const person1 = { name: 'Kent' };
// const person2 = { name: 'Mark' };

// const a = () => {
//   console.log('a[this] = ', this);

//   function b() {
//     console.log('b[this] = ', this);
//   }

//   b();
// };

// a();
// a.call(person1);
// a.apply(person2);

/* SPREAD OPERATOR vs REST PARAMS */

const nums = [12, 34, 56, 78, 90];
const [first, second, ...args] = nums;

// console.log('first = ', first);
// console.log('second = ', second);
// console.log('args = ', args);

// const book = {
//   name: 'Sherlock Holmes',
//   author: 'Arthur Conan Doyle',
//   year: 1892
// };

// const { ...newBook } = { year: 1890, ...book };

// console.log('newBook = ', newBook);

// function displayUser({ name, age, job }) {
//   console.log('Name: ', name);
//   console.log('Age: ', age);
//   console.log('Job: ', job);
// }

// const person = {
//   name: 'Boburbek',
//   age: 20,
//   job: 'Teacher'
// };
// displayUser({ ...person, ...person, ...person, name: 'Arslonbek', ...person });

// function summa(a = 10, b = 20) {
//   return a + b;
// }

// const total = summa(null, 30);
// const total1 = summa(undefined, 50);
// const total2 = summa(undefined, undefined);
// const total3 = summa(undefined);
// const total4 = summa();

// console.log('total = ', total);
// console.log('total1 = ', total1);
// console.log('total2 = ', total2);
// console.log('total3 = ', total3);
// console.log('total4 = ', total4);

/* Error handling */

function showSalaries(users, bannedUsers) {
  for (const user of users) {
    const isBanned = bannedUsers.some(bannedUser => bannedUser === user.name);
    try {
      if (isBanned) throw `Error: User(${user.name}) is banned`;

      console.log(`salary of ${user.name} is ${user.salary}`);
    } catch (err) {
      console.error('err = ', err);
    }
  }
}

const users = [
  {
    name: 'Arslonbek',
    salary: 1000
  },
  {
    name: 'Kent',
    salary: 2500
  },
  {
    name: 'Mark',
    salary: 4000
  },
  {
    name: 'Sherlock',
    salary: 6000
  }
];

const bannedUsers = ['Kent', 'Mark'];

showSalaries(users, bannedUsers);
console.log('Ishlayapti');
