/**
 *
 * @param {string} tag
 * @param {string} word
 * @returns {string}
 */
function makeTags(tag, word) {
	return `<${tag}>${word}</${tag}>`;
}

console.log(makeTags('i', 'arslonbek')); // '<i>i</i>'
console.log(makeTags('p', 'boburbek')); // '<i>i</i>'
console.log(makeTags('div', 'jamshid')); // '<i>i</i>'

let word = 'hello boy';
console.log(word.endsWith('bo'));
