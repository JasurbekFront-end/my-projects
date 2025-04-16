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

// class Box {
//   name: string;

//   constructor(name: string) {
//     this.name = name;
//   }

//   open() {
//     console.log(`${this.name} is open`);
//   }
// }

// const box1 = new Box('Box-1');
// console.log('box1  = ', box1);

// const box2 = new Box('Box-2');
// console.log('box2 = ', box2);

// console.log(box1.open === box2.open)

/* Inheritance */

type Uniform = 'white' | 'green' | 'blue';

class Person {
  constructor(
    public name: string,
    public birthDate: string,
    public uniform: Uniform
  ) {}

  getInfo() {
    return `Name: ${this.name}, Birth Date: ${this.birthDate}`;
  }

  eat() {
    console.log(`${this.name} is eating`);
  }

  do() {
    console.log(`${this.name} is doing...`);
  }
}

class Teacher extends Person {
  constructor(
    public name: string,
    public birthDate: string,
    public uniform: Uniform,
    public subject: string
  ) {
    super(name, birthDate, uniform);
  }

  teach() {
    console.log(`${this.name} is teaching ${this.subject}`);
  }

  do() {
    console.log(`${this.name} is teaching ${this.subject}...`);
  }
}

class Doctor extends Person {
  constructor(
    public name: string,
    public birthDate: string,
    public uniform: Uniform,
    public type: string
  ) {
    super(name, birthDate, uniform);
  }

  diagnose() {
    console.log(`${this.name} is diagnosing ${this.type}`);
  }

  do() {
    super.do();
  }
}

class Developer extends Person {
  constructor(
    public name: string,
    public birthDate: string,
    public uniform: Uniform,
    public language: string
  ) {
    super(name, birthDate, uniform);
  }

  code() {
    console.log(`${this.name} is coding in ${this.language}`);
  }
}

const teacher: Teacher = new Teacher('John', '1990-01-01', 'white', 'Math');
const doctor: Doctor = new Doctor('Jane', '1990-01-01', 'green', 'Heart');
const developer: Developer = new Developer('Jim', '1990-01-01', 'blue', 'JavaScript');

teacher.do();
doctor.do();
developer.do();

console.log('teacher = ', teacher);
console.log('doctor = ', doctor);
console.log('developer = ', developer);

/**
 * string (String)
 * number (Number)
 * boolean (Boolean)
 * null
 * undefined
 * object (Object)
 * array (Array)
 * function (Function)
 *
 */

/* Access Modifiers */
// class Bank {
//   constructor(
//     public name: string,
//     private balance: number,
//     protected owner: string
//   ) {}

//   setBalance(balance: number) {
//     this.balance = balance;
//   }

//   getBalance() {
//     return this.balance;
//   }
// }

// class OnlineBank extends Bank {
//   getInfo() {
//     console.log(`bank:  ${this.name} owner: ${this.owner}`);
//   }
// }

// const bank = new Bank('TBC', 1000, 'Kent');

// bank.setBalance(2000);
// console.log('bank balance = ', bank.getBalance());
