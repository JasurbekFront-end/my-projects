// // const a = 20; // SM_a_001 = 20
// // const b = a + 30; // Const(SM_b_002) = 50
// // b = 60; // SM_b_002 = 60

// // const nums = [1, 2]; // Const(SM_nums_001) = HM_001
// // nums = 30; // SM_nums_001 = 30
// // console.log(nums);

// /**
//  * HEAP MEMORY
//  * HM_001 = [1, 30]
//  */

// // const nums = [1, 2, 3]; // SM_nums_001 = HM_001
// // const nums2 = nums; // SM_nums2_002 = HM_001
// // nums[2] = 20; // HM_001[2] = 20

// // /**
// //  * HEAP MEMORY
// //  * HM_001 = [1, 2, 20]
// //  */

// // console.log('nums = ', nums); // [1, 2, 20]
// // console.log('nums2 = ', nums2); // [1, 2, 20]

// const nums1 = [1, 2, 3]; // SM_nums1_001 = HM_001
// const nums2 = [nums1, 4, 5]; // SM_nums2_002 = HM_002
// const nums3 = nums1; // SM_nums3_003 = HM_001
// nums2[0][1] = 10; // HM_001[1] = 10
// nums3[1] = 20; // HM_001[1] = 20

/**
 * HEAP MEMORY:
 * HM_001 = [1, 20, 3]
 * HM_002 = [HM_001, 4, 5]
 *
 *
 */

// -----Shomurod
// console.log('nums1 = ', nums1); // HM_001
// console.log('nums2 = ', nums2); // [HM_001,4,5]
// console.log('nums3 = ', nums3); // HM_001

// -----Abduvoris+Umar
// console.log('nums1 = ', nums1); // [1,20,3]
// console.log('nums2 = ', nums2); // [[1,10,3],4,5]
// console.log('nums3 = ', nums3); // [1,20,3]

// -----Guli + Muzaffar + Jasur
// console.log('nums1 = ', nums1); // [1,2,3]
// console.log('nums2 = ', nums2); // [[1,10,3],4,5]
// console.log('nums3 = ', nums3); // [1,20,3]

let a = 'arslonbek';
let b = [a.slice(0, 1), 1, 2, [1, 2]];
let c = b[3];
b[0] = 'arslonbek';
a[4] = 'l';
console.log(a);
console.log(b);
console.log(c);

// --Shomurod---
// console.log(a); // "arslonbek"
// console.log(b); // 'a'
// console.log(c); // 'l'

// --Qizlar + Shoxrux ---
// console.log(a); // "arslonbek"
// console.log(b); // ['arslonbek', 1, 2, [1, 2]]
// console.log(c); // [1, 2]
