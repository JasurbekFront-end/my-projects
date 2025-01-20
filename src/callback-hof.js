/* CALLBACK Function */
// function run() {
// 	console.log('Arslonbek is running...');
// }

// function app(cb) {
// 	cb();

// 	console.log(run === cb);
// }

// app(run);

/* Non-Primitive(Reference) Values */
// HM_nums_0001 = [1,2,3,4,5]
// let nums = [1, 2, 3, 4]; // SM_nums_001 = HM_nums_0001
// let array = nums;
// array[array.length] = 5;

// console.log(nums);

/* Higher Order Function */
function run() {
	console.log('Arslonbek is running...');
} // SM_run_001 = HM_run_0001([])

function app2(callback) {
	return callback;
}
