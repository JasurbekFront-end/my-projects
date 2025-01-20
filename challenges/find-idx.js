/**
 *
 * @param {string} longStr
 * @param {string} needStr
 * @returns {number}
 */
function findIdx(longStr, needStr) {
	if (!needStr) return 0; // falsy
	let idx = -1;

	// longStr = 'hello', needStr = 'll'
	for (let i = 0; i <= longStr.length - needStr.length; i++) {
		let str = '';
		for (let j = 0; j < needStr.length; j++) {
			str += longStr[i + j]; //
		}

		if (str === needStr) {
			idx = i;
			break;
		}
	}
	return idx;
}

console.log(findIdx('hello', 'll')); // 2
console.log(findIdx('aaaaa', 'bba')); // -1
console.log(findIdx('abc', '')); // 0
