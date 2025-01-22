/**
 *
 * @param {string[]} words
 */
function filterWords(words) {
	for (let i = 0; i < words.length - 1; i++) {
		const checkWord = words[i]; // "eat"

		if (!checkWord) continue;

		for (let j = i + 1; j < words.length; j++) {
			const word = words[j]; // 'tea'
			let isCorrect = true;

			if (word.length !== checkWord.length || !word) continue;

			for (const letter of checkWord) {
				if (word.indexOf(letter) === -1) {
					isCorrect = false;
					break;
				}
			}

			if (isCorrect) words[j] = '';
		}
	}

	return words.filter((word) => word);
}

console.log(filterWords(['pdp', 'apa', 'app', 'ppa', 'apd', 'dpp']));

/**
 * Case 1:
 *  input:  ["eat", "tea", "tan", "ate", "nat", "bat"]
 *  output: ["eat", "tan", "bat"]
 *
 * Case 2:
 *  input:  ["pdp", "apa", "app", "ppa", "apd", "dpp"]
 *  output: ["pdp", "apa", "app", "apd"]
 *
 * Case 3:
 *  input:  []
 *  output: []
 *
 * Case 4:
 *  input:  ["nee", "enn", "nea"]
 *  output: ["nee", "enn", "nea"]
 *
 */
