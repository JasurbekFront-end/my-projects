// function summa(a, b, c) {
// 	return a + b + c;
// }

// let result =  summa(10, 20, 30);

// let text = 'arslonbek good boy';
// let result = text.match(/o+/g);

// console.log(result);

/**
 *
 * @param {string} str
 * @returns {number}
 */
function maxBlock(str) {
	let max = 0;

	for (const character of str) {
		const regexp = new RegExp(character + '+', 'g');
		const matches = str.match(regexp);
		for (const word of matches) {
			max = Math.max(max, word.length);
		}
	}

	return max;
}

// console.log(maxBlock('abbCCCddBddddBBxx')); // → 3

/**
 *
 * @param {number} max
 */
function primeNumbers(max) {
	let result = [];

	for (let i = 2; i <= max; i++) {
		let isPrime = true;
		for (let j = 2; j < Math.sqrt(i); j++) {
			if (i % j === 0) isPrime = false;
		}

		if (isPrime) result.push(i);
	}

	return result;
}

console.log(primeNumbers(23)); // 2,3,5,7,11,13,17,19

function sameEnds(str) {
	for (let i = Math.floor(str.length / 2); i >= 0; i--) {
		if (str.slice(0, i) === str.slice(-i)) {
			return str.slice(0, i);
		}
	}
	return '';
}

console.log(sameEnds('axxxxxxa'));
