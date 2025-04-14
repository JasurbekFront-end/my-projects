// /* Factory Function */
// const Prototype = {
//   run() {
//     console.log(`${this.name} is running...`);
//   }
// };

// function createBox(name, color) {
//   const box = Object.create(Prototype);
//   box.name = name;
//   box.color = color;

//   return box;
// }

// const box = createBox('Box-1', 'Black');

// box.run();

// console.log('box-1 = ', box);

// /* Contructor function */
// function Box(name, color) {
//   this.name = name;
//   this.color = color;
//   this.run = function () {
//     console.log(`${this.name} is running...`);
//   };
// }

// Box.prototype.age = 20;

// const box2 = new Box('Box-2', 'White');
// box2.run();
// console.log('box-2 = ', box2);

/* __proto__ vs prototype */

// const string = new String('arslonbek');
// console.log('string = ', string);

// const boolean = new Boolean(true);
// console.log('boolean = ', boolean);

// function Box() {} // new Function()
// const box = new Box(); // {}
// console.log('box = ', box);

// console.log(Box.__proto__ === Function.prototype);
// console.log(Box.__proto__.__proto__ === Function.prototype.__proto__);
// console.log(Function.__proto__ === Function.prototype);
// console.log(Function.prototype.__proto__ === Object.prototype);
// console.log(Function.prototype.__proto__.__proto__);
