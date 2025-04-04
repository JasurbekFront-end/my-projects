// console.log(box1.run === box100.run);
const prototype = {
  run() {
    // @ts-ignore
    console.log(`${this.name} is running...`);
  },
  jump() {
    // @ts-ignore
    console.log(`${this.name} is jumping...`);
  }
};
const person = { ...prototype };
console.log('person = ', person);
// const person2 = {
//   name: 'Mark',
//   age: 21,
//   ...methods
// };
const person1 = Object.create(prototype); // {}
person1.name = 'Kent';
person1.age = 20;

const person2 = Object.create(prototype); // {}
person2.name = 'Mark';
person2.age = 21;
console.log('person1 = ', person1);
console.log('person2 = ', person2);

console.log(person1.run === person2.run);
