console.log('------- TOP CHAR ------');

/**
 * @param {string} str
 * @return {string}
 */
function topChar(str) {
	let maxCount = 0;
	let maxLetter = str[0] || '';

	for (let i = 0; i < str.length - 1; i++) {
		let count = 1;
		const letter = str[i];

		for (let j = i + 1; j < str.length; j++) {
			const nextLetter = str[j];

			if (nextLetter === letter) count++;
		}

		if (count > maxCount) {
			maxCount = count;
			maxLetter = letter;
		}
	}

	return maxLetter;
}

console.log(topChar('aaaabbbbcc') === 'a');
console.log(topChar('xyzxyzx') === 'x');
console.log(topChar('abcde') === 'a');
console.log(topChar('aaaaa') === 'a');
console.log(topChar('abababa') === 'a');
console.log(topChar('') === '');
