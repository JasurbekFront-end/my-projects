// function summa1(a, b, c, d) {
// 	return a + b + c + d;
// }
// function summa2(...nums) {
// 	// rest parameter
// 	return nums.reduce((acc, current) => acc + current);
// }

// let nums = [10, 20, 30, 40];

// const result1 = summa2(nums[0], nums[1], nums[2], nums[3]);
// console.log('result = ', result1);

// const result2 = summa1(...nums); // spread operator
// console.log('result2 = ', result2);
// let nums = [10, 20, 30, 40, 50, 60];

// // let a = nums[0];
// // let b = nums[1];

// // Destructuring
// let [a, b, ...lastNums] = nums;
// console.log('a = ', a);
// console.log('b = ', b);
// console.log('lastNums = ', lastNums);

// let a = [1, 2, 3, 5];
// let b = [...a, ...a];
// let [c, ...d] = [...a];

// // console.log('b = ', b); // [1, 2, 3, 5, 1, 2, 3, 5]
// // console.log('c = ', c); // []
// // console.log('d = ', d); // []

// let a = 10;
// let b = 20;
// console.log(a, b);

// [a, b] = [b, a];

// console.log(a, b);

let nums = [1, 2, 3];
let nums2 = [...nums];

nums2[0] = 1000;

console.log('nums = ', nums);
console.log('nums2 = ', nums2);
