class Box {
  constructor(name, callback) {
    this.name = name;

    if (callback) callback(this.jump.bind(this));
  }

  jump() {
    console.log('this = ', this);
    // console.log(`${this.name} is jumping...`);
  }
}

const box1 = new Box('Box-1', method => {
  method();
});
const box2 = new Box('Box-2', method => {
  method();
});
