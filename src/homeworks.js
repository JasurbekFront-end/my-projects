// function createAnimal(type: 'Dog' | 'Cat') {
//   return {
//     type, // Dog
//     speak() {
//       return `${this.type} makes a sound`; // Dog makes a sound
//     }
//   };
// }

// const dog = createAnimal('Dog');
// const cat = Object.create(dog); // {}
// // cat.type = 'Cat';

// console.log('dog = ', dog);
// console.log('cat = ', cat);

// console.log(dog.speak()); // x makes a sound
// console.log(cat.speak()); // x makes a sound

// /**
//  // * [Shaxriyor] - CAT | DOG
//  // * [Abubakr, Davlatbek, Ismoil] - CAT | CAT
//  * [Saidxon, Sevinch, Shahnoza, Muzaffar, Zoir, Mohitabonu] - DOG | CAT
//  * [Behruz, Hamdambek, Abduvoris] - DOG | DOG
//  // * [Hasan] - undefined | undefined
//  *
//  */

// const A = { x: 1 }; //
// const B = Object.create(A); // {}
// const C = Object.create(B); // {}

// console.log('A = ', A);
// console.log('B = ', B);
// console.log('C = ', C);

// B.x = 2;
// console.log('B.x = ', B.x); // 1

// console.log('C.x = ', C.x); // ?
// delete B['x'];
// console.log('C.x = ', C.x); // ?

// const base = { isBase: true };
// const derived = Object.create(base); // {}
// derived.isDerived = true;

// console.log('derived  = ', derived);

// console.log('isBase' in derived); // ?
// console.log(derived.hasOwnProperty('isBase')); // ?

// const proto = { a: 1 };
// const obj = Object.create(proto);
// obj.a = 2;

// console.log(obj.a); // 2
// delete obj.a;
// console.log(obj.a); // 1
// delete proto.a;
// console.log(obj.a); // undefined

// const a = {
//   get value() {
//     return Math.random();
//   }
// };

// const b = Object.create(a);

// console.log(b.value); // ?
// console.log(b.value); // ?

function createTask(title) {}

const t1 = createTask('Learn JS');
// { title: "Learn JS", isDone: true }
const t2 = createTask('Build a project');

// { title: "Build a project", isDone: false }

t1.toggle();
console.log(t1.isDone); // true
console.log(t2.isDone); // false
