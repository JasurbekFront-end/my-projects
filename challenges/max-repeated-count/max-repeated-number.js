/**
 *
 * @param {number[]} nums
 * @returns {number}
 */
function maxRepeatedNumber(nums) {
	let maxNumber = 0;
	for (let i = 0; i < nums.length; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			const isRepeated = nums[i] === nums[j];
			const isMax = maxNumber < nums[i];

			if (isRepeated && isMax) maxNumber = nums[i];
		}
	}

	return maxNumber;
}

console.log(maxRepeatedNumber([3, 30, 2, 5, 90, 1]));
console.log(maxRepeatedNumber([55, 11, 2, 3, 47, 88, 44, 11, 55]));

/**
 * Case 1:
 *  Input: [3, 30, 3, 5, 90, 3]
 *  Output: 3
 *
 * Case 2:
 *  Input: [55,11,2,3,47,88,44,11,55]
 *  Output: 55
 *
 * Case 3:
 *  Input: [50,11,2,3,47,88,44,12,51]
 *  Output: 0
 *
 */
