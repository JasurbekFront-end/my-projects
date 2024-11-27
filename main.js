//             012345678
// let word = 'hello pdp'; // word.length = 9
// let letter = word[1];
// let lastWord = word[6] + word[7] + word[8]; // "pdp"
// let lastLetter = word[9]; // undefined

// let word2 = null; // undefined
// let letter2 = word2[1];

// console.log('-----FOR-----');
// for (let i = 0; i < 10; i += 2) {
// 	console.log('Hi Person-' + i);
// }

// console.log('-----WHILE-----');

// while (true) {
// 	console.log('Hi Person-' + i);
// 	break;
// }

function delDel(str) {
	if (str.length <= 3) return str;

	if (str[1] + str[2] + str[3] === 'del') {
		let result = str[0];
		for (let i = 4; i < str.length; i++) result += str[i];
		return result;
	}

	return str;
}
