/**
 *
 * @param {number[]} nums
 * @param {number} k
 * @returns {number[]}
 */
function reverseArray(nums, k) {
	return [...nums.slice(-k), ...nums.slice(0, -k)]; // n
}

console.log(reverseArray([3, 2, 2, 3], 2)); // [3, 3, 2, 2]
console.log(reverseArray([0, 1, 2, 2, 3, 0, 4, 2], 2)); // [4, 2, 0, 1, 2, 2, 3, 0]
