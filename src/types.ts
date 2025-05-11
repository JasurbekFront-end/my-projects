// function go<A extends { length: B }, B>(a: A, b: B) {
//   return { a, b };
// }

// class A {
//   length = false;
//   constructor(public name: number) {}
// }

// const a = new A(10); // { length: number }
// go([1, 2, 3], 100);
// go('hello', 200);
// go(a, false);

/* Record keyword  */
// type PersonKey = 'name' | 'age' | 'salary';

// type Person = Record<PersonKey, string>;
// interface Person2 {
//   name: string;
//   age: string;
//   job: string;
// }

// const person: Person = {
//   name: 'John',
//   age: '20',
//   salary: '10000'
// };

// const person2: Person2 = {
//   name: 'John',
//   age: '20',
//   job: 'Developer'
// };

