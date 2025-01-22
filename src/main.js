/* Parsing */

/* Number to (*) */
// let a = 0;
// let booleanA = Boolean(a);
// let stringA = String(a);

// console.log('booleanA = ', booleanA);
// console.log('stringA = ', stringA);

/* String to (*) */
// let b = '';
// let booleanB = Boolean(b);
// let numberB = Number(b);

// console.log('booleanB = ', booleanB);
// console.log('numberB = ', numberB);

/* NaN - Not a Number */

/* Boolean to (*) */
// let c = true;
// let stringC = String(c);
// let numberC = Number(c);

// console.log('stringC = ', stringC);
// console.log('numberC = ', numberC);

/* PUSH METHOD */
// let nums = [1, 2, 3, 4];
// nums.push(50, 51, 52, 53);
// console.log(nums);

/* POP METHOD */
// let nums = [1, 2, 3, 4];
// let removedNum = nums.pop();
// console.log('removedNum = ', removedNum);
// console.log('nums = ', nums);

/* UNSHIFT METHOD */
// let nums = [1, 2, 3, 4];
// nums.unshift(-1, 0);
// console.log('nums = ', nums);

/* SHIFT METHOD */
// let nums = [1, 2, 3, 4];
// let removedNum = nums.shift();
// console.log('removedNum = ', removedNum);
// console.log('nums = ', nums);

/* MAP METHOD */
// let nums = [1, 22, 10, 11];
// let nums2 = nums.map((num, idx) => num ** 2);
// console.log('nums = ', nums);
// console.log('nums2 = ', nums2);

// Example
// let emojis = ['😄', '😁', '😊'];
// let listNames = emojis.map((emoji) => `${emoji}${emoji}`);

// console.log('listNames = ', listNames);

/* FILTER METHOD */
let nums = [1, 22, 10, 11];
let nums2 = nums.filter((num) => num > 10);
console.log('nums = ', nums);
console.log('nums2 = ', nums2);
