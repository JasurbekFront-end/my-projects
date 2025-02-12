console.log('------- MATCHING ------');

/**
 * @param {string[]} texts
 * @param {string} pattern
 * @return {string[]}
 */
function matching(texts, pattern) {
	const result = [];
	for (const text of texts) {
		if (isMatching(text, pattern)) {
			result.push(text);
		}
	}
	return result;
}

/**
 * Checks if a given text matches a given pattern based on a one-to-one character mapping.
 *
 * @param {string} text - The input text string.
 * @param {string} pattern - The pattern string to match against the text.
 * @returns {boolean} True if the text matches the pattern, false otherwise.
 */
function isMatching(text, pattern) {
	if (text.length !== pattern.length) {
		return false;
	}

	const map = new Map();
	for (let i = 0; i < pattern.length; i++) {
		const charText = text[i];
		const charPattern = pattern[i];

		if (!map.has(charPattern)) {
			if ([...map.values()].includes(charText)) {
				return false;
			}
			map.set(charPattern, charText);
		} else if (map.get(charPattern) !== charText) {
			return false;
		}
	}

	return true;
}

console.log(matching(['abc', 'deq', 'mee', 'aqq', 'dkd', 'ccc'], 'abb')); // ["mee","aqq"]
console.log(matching(['pdp', 'g-9', 'pdp-g-8', 'pdp-g-7', 'aba', 'cbc'], 'mam')); // ["pdp","aba","cbc"]
console.log(matching(['a', 'b', 'c', 'bc'], 'c')); // ["a","b","c"]
console.log(matching(['pdp', 'abb', 'baa', 'poo'], 'app')); // ["abb","baa", "poo"]
