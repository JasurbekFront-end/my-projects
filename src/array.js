// /* Array sort method */
// /* string */
// // const names = ['alimbaev arslonbek', 'abinov arslonbek', 'boburbek'];

// // names.sort();
// // console.log('names = ', names);

// /* number */
// const nums = [0, 3, 11, 33, 40, 44, 100];

// nums.sort((a, b) => a - b);
// /**
//  * cfr >= 0 => swap [a,b]
//  * cfr < 0 => no swap [a,b]
//  */
// console.log('nums = ', nums);

/* Array.methods */

// const nums = new Array(5).fill();
// console.log('nums = ', nums);

// const nums2 = Array.from({ length: 5 }, (_, idx) => idx + 1);
// console.log('nums2 = ', nums2);

// const nums = [2, 3, 4]; // [9,16,4]
// const nums2 = nums.map((num, idx, array) => {
// 	if (array[idx + 1]) return array[idx + 1] ** 2;
// 	return num;
// });

// console.log('nums2 = ', nums2);
// const a = false;
// const b = a ?? 'arslonbek';

// console.log('a = ', a);
// console.log('b = ', b);

// function tenRun(nums) {
// 	let tenner;
// 	return nums.map((num) => {
// 		tenner = num % 10 ? tenner : num;
// 		return tenner ?? num;
// 	});
// }

// console.log(tenRun([2, 10, 3, 4, 20, 5]));

let a = 1;
let b = '2';
let c = a + Number(b);

[].reduce((a, c) => a + c, 0);
