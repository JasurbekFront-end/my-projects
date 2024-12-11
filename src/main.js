/* REPEAT */
// function repeat(str, times) {
// 	let result = '';
// 	for (let i = 0; i < times; i++) {
// 		result += str;
// 	}

// 	return result;
// }

// console.log(repeat('pdp', 2)); // "pdppdp"
// console.log(repeat('good', 1)); // "good"
// console.log(repeat('g-20')); // "" 👍
// console.log(repeat('boburbek', 2)); // "boburbekboburbek"

/* SLICE */
// function slice(str, startIndex, endIndex) {
// 	let result = '';

// 	for (let i = startIndex; i < (endIndex || str.length); i++) {
// 		result += str[i];
// 	}

// 	return result;
// }

// console.log(slice('pdp school', 2, 5)); // "p s"
// console.log(slice('uzbekistan', 2, 5)); // "bek"
// console.log(slice('pdp uzbekistan', 2)); // "p uzbekistan"
// console.log(slice('pdp', 0)); // "pdp"

// /* CONCAT */
// function concat(str1, str2) {
// 	return str1 + str2;
// }

// console.log(concat('pdp', 'school')); // "pdpschool"
// console.log(concat('pdp school', 'uzbekistan')); // "pdp schooluzbekistan"

/* LASTINDEXOF */
/**
 *
 * @param {string} str
 * @param {string} text
 * @returns {number}
 */
// function lastIndexOf(str, text) {
// 	let idx = -1;
// 	if (!text) return -1;

// 	for (let i = 0; i < str.length; i++) {
// 		let match = true;
// 		for (let j = 0; j < text.length; j++) {
// 			if (str[i + j] !== text[j]) {
// 				match = false;
// 				break;
// 			}
// 		}
// 		if (match) idx = i;
// 	}

// 	return idx;
// }

/**
	* str = "pdp-aa-aa" , text = "aa";
	* idx = -1;
   i = 0 =>
										match = true;
										j = 0 => str[0] = "p", text[0] = "a" => match = false;
			i = 1 => match = true
			       j = 0 => str[1] = "d", text[0] = "a" => match = false;
   i = 2 => match = true
			       j = 0 => str[2] = "p", text[0] = "a" => match = false;
   i = 3 => match = true
			       j = 0 => str[3] = "-", text[0] = "a" => match = false;
   i = 4 => match = true
			       j = 0 => str[4] = "a", text[0] = "a" =>;
			       idx = 4
   i = 5 => match = true
			       j = 0 => str[5] = "-", text[0] = "a" =>;
   i = 6 => match = true
			       j = 0 => str[6] = "a", text[0] = "a" =>; match = true;
										idx = 6
 */

// 	                     0123456
console.log(lastIndexOf('pdp-aa-aa', 'aa')); // 6
