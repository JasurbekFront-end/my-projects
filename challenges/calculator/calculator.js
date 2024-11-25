// @operation: +, -, *, /
function calculator(num1, num2, operation) {
	return eval(num1 + operation + num2); // eval("100+5")
}

// Examples:
console.log(calculator(100, 5, '+')); // 105
console.log(calculator(10, 2, '*')); // 20
console.log(calculator(10, 2, '-')); // 8
console.log(calculator(12, 2, '/')); // 6
