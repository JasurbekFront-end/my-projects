// import './promise-resolve-and-reject';
// import './promise-all-rice';
// import './async-await';
// import './github-with-async-await';
// import './window';

import users from './users.json'; // auto parsing;

console.log(users.users);

// let a = undefined; // undefined
// console.log(a);

/* JSON.stringify */
const text = JSON.stringify(users);
console.log(text);

/* JSON.parse */
const parsed = JSON.parse(text);
console.log(parsed);
