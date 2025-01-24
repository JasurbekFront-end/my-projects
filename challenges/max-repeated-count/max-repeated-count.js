/**
 *
 * @param {number[]} nums
 * @returns {number}
 */
function maxRepeatedCount(nums) {
	let count = 0;
	let number = 0;
	let maxCount = 0;

	for (let i = 0; i < nums.length; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			if (nums[i] === nums[j]) {
				count++;
			}
		}

		if (count > maxCount) {
			maxCount = count;
			number = nums[i];
		}
	}

	return number;
}

console.log(maxRepeatedCount([3, 30, 3, 5, 90, 3, 5, 5, 5]));
console.log(maxRepeatedCount([55, 11, 55, 2, 47, 88, 44, 11, 11, 55, 11]));

/**
 * Case 1:
 *  Input: [3, 30, 3, 5, 90, 3, 5, 5, 5]
 *  Output: 5
 *
 * Case 2:
 *  Input: [55,11,2,3,47,88,44,11,55, 11]
 *  Output: 11
 *
 * Case 3:
 *  Input: [50,11,2,3,47,88,44,2,12,51,2]
 *  Output: 2
 *
 */
