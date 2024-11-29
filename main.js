//             012345678
// let word = 'hello pdp'; // word.length = 9
// let letter = word[1];
// let lastWord = word[6] + word[7] + word[8]; // "pdp"
// let lastLetter = word[9]; // undefined

// let word2 = null; // undefined
// let letter2 = word2[1];

// console.log('-----FOR-----');
// for (let i = 0; i < 10; i += 2) {
// 	console.log('Hi Person-' + i);
// }

// console.log('-----WHILE-----');

// while (true) {
// 	console.log('Hi Person-' + i);
// 	break;
// }

// function delDel(str) {
// 	if (str.length <= 3) return str;

// 	if (str[1] + str[2] + str[3] === 'del') {
// 		let result = str[0];
// 		for (let i = 4; i < str.length; i++) result += str[i];
// 		return result;
// 	}

// 	return str;
// }

function doubleX(str) {
	for (let i = 0; i < str.length; i++) {
		if (str[i] === 'x' && str[i + 1] === 'x') return true;
	}

	return false;
}

console.log(doubleX('aaaaxx'));

function fizzBuzz1(n) {
	if (n % 15 === 0) return 'FizzBuzz';
	if (n % 3 === 0) return 'Fizz';
	if (n % 5 === 0) return 'Buzz';
}

function fizzBuzz2(n) {
	let result = '';

	if (n % 3 === 0) result += 'Fizz';
	if (n % 5 === 0) result += 'Buzz';

	return result;
}

function fizzBuzz3(n) {
	return (n % 3 ? '' : 'Fizz') + (n % 5 ? '' : 'Buzz');
}

console.log(fizzBuzz1()); // "FizzBuzz"

/**
 * n = 15 => "FizzBuzz"
 * n = 3 => "Fizz"
 * n = 5 => "Buzz"
 * n = 10 => "Buzz"
 *
 * n = 30 => "FizzBuzz"
 */

let nums = [1, 2, 3];
let last = nums[3]; // undefined

// let a = 20;
let str = 'arslonbek';
