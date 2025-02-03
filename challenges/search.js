console.log('-------SEARCH------');

/**
 * @param {string[]} words
 * @param {string} searchWord
 * @return {string[][]}
 */
function search(words, searchWord) {
	for (let letter of searchWord) {
	}
} // mouse

console.log(search(['arslon'], 'arslon'));
console.log(search(['pdp'], '')); // []
console.log(search([], 'pdp')); // []
console.log(search(['pdp-a-15', 'pdp-g-7', 'pdp-g-8', 'pdp-b-7', 'pdp-b-11'], 'pdp-b-7'));
console.log(search(['mobile', 'mouse', 'moneypot', 'monitor', 'mousepad'], 'mouse'));
/**
 * {
 *  m: ["mobile","mouse","moneypot"], // m
 *  mo: ["mobile","mouse","moneypot"], // mo
 *  mou: ["mouse","mousepad"], // mou
 *  mous: ["mouse","mousepad"], // mous
 *  mouse: ["mouse","mousepad"] // mouse
 * }
 */
