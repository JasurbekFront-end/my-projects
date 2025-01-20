/* Slice Method */
// let str = 'javascript';
// /**
//  *
//  * @param {number} startIdx
//  * @param {number} endIdx
//  * @returns {string}
//  */
// function slice(startIdx, endIdx) {
// 	let result = '';

// 	if (startIdx < 0) startIdx = str.length - Math.abs(startIdx);
// 	if (endIdx < 0) endIdx = str.length - Math.abs(endIdx);
// 	if (endIdx > str.length) endIdx = str.length;

// 	for (let i = startIdx; i < endIdx; i++) {
// 		result += str[i];
// 	}

// 	return result;
// }

// const value = slice(0, 2);
// console.log(value);

/* Replace method */
// let old = 'java script';
// let New = old.replace(/jav?a*/, 'type');
// console.log('Old = ', old);
// console.log('New = ', New);

/* Example for Replace */

// /**
//  *
//  * @param {string} a
//  * @param {string} b
//  * @param {string} c
//  * @returns	{string}
//  */
// function cut(a, b, c) {
// 	let search = 'java';
// 	let old = 'java script java spring java-core java-pdp';
// 	old = old.replace(/java/, a); // java -> firebase
// 	old = old.replace(/java/, b); // java -> aws
// 	old = old.replace(/java/, c); // java -> angular

// 	return old;
// }

// console.log(cut('firebase', 'aws', 'angular', 'react', 'next', 'js'));

//

/* CONCAT STRING METHOD */

// let prefix = 'pdp';
// let suffix = 'academy';

// let full = prefix.concat(' ', suffix);

// console.log('prefix = ', prefix);
// console.log('suffix = ', suffix);
// console.log('full = ', full);

/**
 *
 * @param {string} str1
 * @param {string} str2
 * @returns {string}
 */
// function concat() {
// 	let str = 'arslonbek';
// 	let result = str;

// 	for (let argument of arguments) {
// 		result += argument;
// 	}

// 	return result;
// }

// const fullNames = concat('-jamshidbek', '-boburbek', '-sulton');
// console.log(fullNames);

// let str = 'hello world';

function a(callback) {}

function c() {}

a(c);
