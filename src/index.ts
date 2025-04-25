// const afn1 = (a: number) => (b: number) => (c: number) => a + b + c;

// function fn1(a: number) {
//   return function (b: number) {
//     return function (c: number) {
//       return a + b + c;
//     };
//   };
// }

// const value = afn1(20)(30)(40);

// console.dir(value);

// [].filter(() => {});

// function myFunction(a: number, b: number) {
//   a = 100;
//   b = 200;
//   return a + b;
// }

// console.log(myFunction(10, 20));
// console.log(myFunction(10, 20));
// console.log(myFunction(10, 20));

const myUser = { name: 'Kent', age: 20 }; // SM_myUser_001 = HM_0001
const user1 = updateUser(myUser); // updateUser(HM_0001)

function updateUser({ ...user }: any) {
  user.name = 'Mark';
  return user;
}

console.log(user1);
console.log(myUser);
