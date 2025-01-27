/**
 *
 * @param {number[]} nums
 * @param {number} num
 * @returns {[number, []]}
 */
function removeElement(nums, num) {
	let count = 0;
	let i = nums[0];
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] === num) {
			i--;
			nums[i] = '_';
		} else count++;
	}

	return [count, nums];
}

console.log(removeElement([3, 2, 2, 3], 3)); // [2, ["_", 2, 2, "_"]]
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)); // [5, [0, 1, 3, 0, 4, "_", "_", "_"]]
