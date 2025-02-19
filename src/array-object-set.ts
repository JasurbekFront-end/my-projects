/* Array */
// const nums = [10, 20, 30, 40, 50];
// const num1 = nums[0];
// const [num2, ...nums2] = nums;

// console.log('num1 = ', num1);
// console.log('num2 = ', num2);
// console.log('nums2 = ', nums2);

/* Object */
// const nums = { num1: 30, num1: 20 };

// const num1 = nums.num1;
// console.log('num1 = ', num1);

/* Object methods */
// const person = {
// 	name: 'Arslonbek',
// 	age: 23,
// 	address: { state: 'UZB', city: 'Tashkent' },
// };

// const person1 = { address: person.address };

// person1.address = { ...person.address };
// person1.address.city = 'Samarkand';

// console.log(person.address.city);

/* */
const nums1 = new Set<number>([20, 30, 10]);
const nums2 = new Set<number>([10, 50]);

console.log('nums1 = ', nums1);
console.log('nums2 = ', nums2);

console.log(nums1.difference(nums2));
console.log(nums1.intersection(nums2));
console.log(nums1.symmetricDifference(nums2));
console.log(nums1.union(nums2));

let nums = [2, 2, 3, 3, 4, 5, 6, 7, 8, 8];
console.log(nums);
nums = Array.from(new Set(nums));
console.log(nums);
