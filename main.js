function stringX(str) {
	let yigindi = '';

	if (str.length > 1) {
		for (let i = 0; i < str.length; i++) {
			if (str[i] !== 'x') {
				yigindi += str[i];
			}
		}
	}
	if (str[0] === 'x' && str[str.length - 1] === 'x') {
		return 'x' + yigindi + 'x';
	}
	return yigindi;
}

// function findCount(str, words) {
// 	let count = 0;

// 	for (const word of words) {
// 		for(let i = 0; i < str.length; i++) {

// 		}
// 	}
// }

// findCount('pdp-20 pdp-10 pdp-8', ['p', 'p-', 'pdp']); // 3 + 6 = 9
