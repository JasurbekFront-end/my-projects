/**
 * @returns {string}
 */
function myConcat(...words) {
	let str = 'arslonbek';

	words.forEach((word) => (str += word));

	return str;
}

console.log(myConcat(' is', ' developer'));
