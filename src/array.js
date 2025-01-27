// const nums = [1, 2, 3];
// const nums2 = new Array(nums.length).fill(3);
// console.log('nums2 = ', nums2);

// nums2.map((num) => {
// 	console.log('num = ', num);
// });

// // <li>List-1</li>, <li>List-2</li>, <li>List-3</li>

const nums = [1, 2, 3, 4]; // SM_nums_001 = HM_nums_0001

/**
 * HEAP MEMORY
 * HM_nums_0001 = [4, 2, 3, 4]
 */
// nums[0] = nums[nums.length - 1]; // HM_nums_0001[0] = HM_nums_0001[3]
// nums[nums.length - 1] = nums[0];

// console.log('nums = ', nums);

// let a = [1, 2, 3, [4, 5, 6]];
// let b = [...a, [4, 5, 6]];
// b[3] = [...a[3]];
// a[3][0] = 10;
// console.log(a); // [1,2,3,[10,5,6]]
// console.log(b); // [1,2,3,[10,5,6],[4,5,6]]

// const days = [30, 60, 90];
// console.log(days.map((day) => `${day}days`).join(', ')); // 30days, 60days, 90days

const num = prompt('Raqam kiriting...');
console.log('num = ', Number(num));
