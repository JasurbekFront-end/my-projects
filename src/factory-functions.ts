const prototype = {
  run() {
    // @ts-expect-error
    console.log(this.name + ' is running...');
  },
  jump() {
    // @ts-expect-error
    console.log(this.name + ' is jumping...');
  }
};
function createBox(name: string, age: number, color: string) {
  const box = Object.create(prototype);
  box.name = name;
  box.age = age;
  box.color = color;

  return box;
}

const box1 = createBox('Box-1', 100, 'black');
const box100 = createBox('Box-100', 1000, 'yellow');
console.log(box1.run === box100.run);
