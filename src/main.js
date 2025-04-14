// const num = 10; // new Number(10).valueOf();

// const prototype = {
//   run() {
//     console.log(`${this.name} is running...`);
//   }
// };

// function createBox(name, color) {
//   const box = Object.create(prototype);
//   box.name = name;
//   box.color = color;

//   return box;
// }

// const box1 = createBox('box1', 'red');
// console.log('box1 = ', box1);

// function Box(name, color) {
//   this.name = name;
//   this.color = color;
// }

// Box.prototype.run = function () {
//   console.log(`${this.name} is running...`);
// };

// const box = new Box('Box', 'blue');
// console.log(box.__proto__.__proto__);

// const proto = Object.getPrototypeOf;
// console.log(proto(proto(proto(box))));

// const obj = new Number(10);
// Object.setPrototypeOf(obj, { run: function () {} });
// Object.setPrototypeOf(obj, { jump: function () {} });

// console.log(Object.getPrototypeOf(obj));

// const methods = {
//   run: function () {},
//   toString: function () {
//     return 'Hello methods';
//   }
// }; // new Object()
// const box = Object.create(methods);

// box.toString = function () {
//   return 'Hello world';
// };

// box.toString()
/**
 * Box = {} -> no
 * methods = { run: function () {} } -> yes
 * Object.prototype = { toString: function () {} } -> yes
 */

// const div = document.createElement('div');
// console.log('div = ', div);

// console.log(div.__proto__); // HTMLDivElement.prototype
// console.log(div.__proto__.__proto__); // HTMLElement.prototype
// console.log(div.__proto__.__proto__.__proto__); // Element.prototype
// console.log(div.__proto__.__proto__.__proto__.__proto__); // Node.prototype
// console.log(div.__proto__.__proto__.__proto__.__proto__.__proto__); // EventTarget.prototype
// console.log(div.__proto__.__proto__.__proto__.__proto__.__proto__.__proto__); // Object.prototype

// console.log(div instanceof HTMLDivElement);
// console.log(div instanceof HTMLElement);
// console.log(div instanceof Object);
// const num = 10; // new Number(10).valueOf();
// console.log(Number instanceof Object);
// console.log(1 instanceof Number);
// const error = new Error('error'); // new Error(); { message: string }
// console.log(error instanceof Object);
// console.log(error instanceof Error);

// function Box(name) {// new Function()
//   this.name = name;
// }
// Box.prototype.run = function () {
//   console.log(`${this.name} is running...`);
// };

// const box = new Box('box'); // new Box()
// console.log('box = ', box);

// console.dir(Box);

// console.log(box instanceof Box);
// console.log(box instanceof Object);
// console.log(box instanceof Function);
// console.log(Box instanceof Function);

// const nums = []; // new Array()

// console.log(nums instanceof Array);
// console.log(nums instanceof Object);
// console.log(nums instanceof Function);
// console.log(Array instanceof Function);
// console.log(Object instanceof Function);
// console.log(Number instanceof Function);

// const person = {
//   firstName: 'Kent',
//   lastName: 'Mark',
//   get fullName() {
//     // console.log('CALLED FULLNAME GETTER');
//     return `${this.firstName} ${this.lastName}`;
//   },
//   set fullName(fullName) {
//     // console.log('CALLED FULLNAME SETTER');

//     const [firstName, lastName] = fullName.split(' ');
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
// };
// console.log(person.fullName);
// person.fullName = 'Sherlock Holmes';
// console.log(person.fullName);

// const box = {
//   name: 'Box-1'
// };

// Object.defineProperties(box, {
//   color: {
//     value: 'Red',
//     writable: true
//   }
// });

// // delete box.color;

// box.color = 'Blue';

// for (let key in box) {
//   console.log('key = ', key);
// }

// console.log(box);

const prototype = { length: 10 };
const box = Object.create(prototype);
// box.length = 20;
console.log('box = ', box);
console.log(box.hasOwnProperty('length'));
console.log('length' in box);
// console.log(prototype.hasOwnProperty('length'));
