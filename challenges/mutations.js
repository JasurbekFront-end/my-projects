/**
 *
 * @param {number[]} nums
 */
function mutations(nums) {
	let result = [];

	return result;
}

plusOut('abXYabcXYZ', 'abc') → ++++abc+++
/**
	* Replaces all characters in the string except the target with '+'.
	* @param {string} str - The input string.
	* @param {string} target - The target substring to keep unchanged.
	* @returns {string} - The modified string.
	*/
function plusOut(str, target) {
	const regex = new RegExp(`(?!${target}).`, 'g');
	return str.replace(regex, '+');
}

console.log(plusOut('abXYabcXYZ', 'abc')); // ++++abc+++

/**
 * Case 1:
 *  nums = [1, 2, 3]
 *  Expected: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 *
 * Case 2:
 *  nums = [1, 2]
 *  Expected: [[1,2],[2,1]]
 *
 * Case 3:
 *  nums = [1]
 *  Expected: [[1]]
 *
 * Case 4:
 *  nums = [1]
 *  Expected: []
 */
