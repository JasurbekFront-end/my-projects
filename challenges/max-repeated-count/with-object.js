/**
 *
 * @param {number[]} nums
 * @returns {number}
 */
function maxRepeatedCountWithObject(nums) {
	const counter = {};
	let max = 0;
	let maxNumber = 0;

	for (const num of nums) {
		counter[num] = counter[num] ? counter[num] + 1 : 1;
	}

	for (const key in counter) {
		if (max < counter[key]) {
			max = counter[key];
			maxNumber = key;
		}
	}

	return maxNumber;
}

console.log(maxRepeatedCountWithObject([3, 30, 3, 5, 90, 3, 5, 5, 5]));
console.log(maxRepeatedCountWithObject([55, 11, 55, 2, 47, 88, 44, 11, 11, 55, 11]));

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
