console.log('------- MATCHING ------');

/**
 * @param {string[]} texts
 * @param {string} pattern
 * @return {string[]}
 */
function matching(texts, pattern) {
	return [];
}

console.log(matching(['abc', 'deq', 'mee', 'aqq', 'dkd', 'ccc'], 'abb')); // ["mee","aqq"]
console.log(matching(['pdp', 'g-9', 'pdp-g-8', 'pdp-g-7', 'aba', 'cbc'], 'mam')); // ["pdp","aba","cbc"]
console.log(matching(['a', 'b', 'c', 'bc'], 'c')); // ["a","b","c"]
console.log(matching(['pdp', 'abb', 'baa', 'poo'], 'app')); // ["abb","baa", "poo"]
