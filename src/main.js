/* Match method */
// let text = 'hello pdp-20 pdp-1-10- pdp-a-11-';

// let searchPattern = /pdp-?[\D\d]?-(\d)*/g;
// let matches = text.match(searchPattern);
// console.log(matches);

/* Search method */
// let text = 'hello pdp-20 pdp-1-10- pdp-a-11-';

// let searchPattern = /pdp-?[\D\d]?-(\d)*/g;
// let matches = text.search(searchPattern);
// console.log(matches);

// let text = 'hello pdp-20 pdp-1-10- pdp-a-11-';

// let searchPattern = /pdp/g;
// let newText = text.replace(searchPattern, 'najot');
// console.log('newText = ', newText);

/**
 *
 * @param {string} text
 * @param {string} pattern
 * @returns  string
 */
function cut(text, pattern) {
	const regex = new RegExp(`[\\D]${pattern[1] || ''}`, 'g');
	const matches = text.match(regex);
	return matches[0];
}

console.log(cut('hello pdp', 'ae')); // llo pdp
console.log(cut('hi pdp', 'i')); // i pdp
