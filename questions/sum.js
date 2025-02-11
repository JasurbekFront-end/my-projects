console.log('-------SUM------');

/**
 * @param {number[]} nums
 * @param {string[]} operations
 * @return {number}
 */
function sum(nums, operations) {
	if (!operations.length || nums.length < 2) return 0;

	let str = '';
	operations = operations.slice(0, nums.length - 1);

	for (let i = 0; i < nums.length; i++) {
		str += `${nums[i]}${operations[i] || ''}`;
	}

	return eval(str);
}

console.log(sum([4, 4, 1], ['+', '-', '*']) === 7); // 4 + 4 - 1 -> 7
console.log(sum([1, 1], []) === 0); // 0
console.log(sum([1], ['*', '/', '+']) === 0); // 0
console.log(sum([4, 5, 5, 5], ['*', '*', '/']) === 20); // 4 * 5 * 5 / 5 -> 20
console.log(sum([5, 4], ['*', '*', '/']) === 20);
console.log(sum([3, 3], ['-', '*', '/']) === 0);
