/**
 *
 * @param {string} str
 * @param {number} n
 */
function frontTimes(str, n) {
	let temp = (str[0] || '') + (str[1] || '') + (str[2] || '');
	let result = '';

	for (let i = 0; i < n; i++) {
		result += temp;
	}

	return result;
}

// console.log(frontTimes('A', 4)); // AAAA
/**
 *
 * n = 4; temp =  "A" + "" + "" = "A"; result = "";
 * i = 0; => result = "" + "A" = "A";
 * i = 1; => result = "A" + "A" = "AA";
 * i = 2; => result = "AA" + "A" = "AAA";
 * i = 3; => result = "AAA" + "A" = "AAAA";
 * i = 4; break;
 * return "AAAA"
 *
 */

function stringSplosion(str) {
	let result = '';
	for (let i = 0; i < str.length; i++) {
		for (let j = 0; j <= i; j++) {
			result += str[j];
		}
	}
	return result;
}

console.log(stringSplosion('Ali'));
/**
 * stringSplosion("Ali") // "AAlAli"
 * ---------
 * str = "Ali"; result = "";
 * i = 0; =>
 *     j = 0; result = "" + "A" = "A";
 *     j = 1; break;
 * i = 1; =>
 *     j = 0; result = "A" + "A" = "AA";
 *     j = 1; result = "AA" + "l" = "AAl";
 *     j= 2; break;
 * i = 2; =>
 *     j = 0; result = "AAl" + "A" = "AAlA";
 *     j = 1; result = "AAlA" + "l" = "AAlAl";
 *     j = 2; result = "AAlAl" + "i" = "AAlAli";
 * i = 3; break;
 * return "AAlAli"
 */

/* FOR-OF LOOP */
// let str = 'Ali';

// for (let i = 0; i < str.length; i++) {
// 	let letter = str[i];
// 	console.log('letter = ', letter);
// }

// console.log('----------');

// for (let letter of str) {
// 	console.log('letter = ', letter);
// }
