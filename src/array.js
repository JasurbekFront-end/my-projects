let nums = [1, 2, 3, 4, 5];

function forEach(array, callback) {
	for (let i = 0; i < array.length; i++) {
		const item = array[i];
		callback(item, i);
	}
}

function display(narsa, idx) {
	console.log('narsa = ', narsa);
}

forEach(nums, display);
// nums.forEach(display);
