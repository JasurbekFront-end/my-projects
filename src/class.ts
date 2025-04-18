// // class Box {
// //   constructor(public name: string) {
// //     this.run = this.run.bind(this);
// //   }

// //   run() {
// //     console.log(`${this.name} is running...`);
// //   }

// //   move() {
// //     const run = this.run;
// //     run();
// //     console.log(`${this.name} is moving...`);
// //   }
// // }

// // const box1 = new Box('Box-1');
// // console.log(box1);

// interface IPerson {
//   name: string;
//   run(): void;
// }

// interface IPerson2 {
//   age: number;
//   jump(): void;
// }

// class Person implements IPerson, IPerson2 {
//   constructor(
//     public name: string,
//     public age: number
//   ) {}

//   run(): void {
//     console.log(`${this.name} is running...`);
//   }
//   jump(): void {
//     console.log(`${this.name} is jumping...`);
//   }
// }

// const person = new Person('John', 180);
// console.log(person);
