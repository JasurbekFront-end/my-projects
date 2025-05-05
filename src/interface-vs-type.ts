/* INTERFACE is best for defining object shapes */
// interface Person {
//   name: string;
//   age: number;
// }

/* type is more flexible — can represent primitives, unions, tuples, etc. */
// type A = string | number; // Union type
// type B = [number, string]; // Tuple type
// type C = { name: string; age: number }; // Any object
// type D = (name: string, age: number) => void; // Function type
// type E = string[] | number[]; // Array type

/* interface supports declaration merging (can be extended multiple times) */
// interface A {
//   name: string;
// }

// interface A {
//   age: number;
// }

// const a: A = {
//   name: 'Kent',
//   age: 20
// };

// console.log(a);

/* type does not support merging — duplicate names cause errors  */
// type A = {
//   name: string;
// };

// type A = {
//   age: number;
// };

// const a: A = {
//   name: 'Kent',
//   age: 20
// };

// console.log(a);

/* type supports union and intersection types (|, &) */
// type A = string | number; // Union type
// type B = 'arslonbek' | 30; // Union type

// const c: B = 'arslonbek';
// const d: B = 'jamshidbek';

// type A = { name: string };
// type B = { age: number };
// type C = A & B; // { name: string; age: number }

// const c: C = {
//   name: 'arslonbek',
//   age: 20
// };

// console.log(c);

// type T1 = string | number;
// type T2 = string & number;

// const t1: T1 = 'something';
// const t2: T2 = 'mark';

/* interface uses extends, type uses & for extending */

// interface B {
//   name: string;
// }

// interface A extends B {
//   age: number;
//   job?: string;
//   name: 'kent' | 'mark';
// }

// const a: A = {
//   name: 'kent',
//   age: 20
// };

// console.log(a);

interface Person {
  name: string;
}
class User implements Person {
  constructor(public name: string) {}
}
