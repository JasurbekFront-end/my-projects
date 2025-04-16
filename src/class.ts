// function Box(name: string) {
//   // @ts-ignore
//   this.name = name;
// }

// Box.prototype.open = function () {
//   console.log(`${this.name} is open`);
// };

// // @ts-ignore
// const box = new Box('Box-1');
// console.log('box = ', box);
// box.open();

class Box {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  open() {
    console.log(`${this.name} is open`);
  }
}

const box1 = new Box('Box-1');
console.log('box1  = ', box1);

const box2 = new Box('Box-2');
console.log('box2 = ', box2);

// console.log(box1.open === box2.open)
