function squareArea(side) {
	const area = Math.pow(side, 2);
	return area;
}
function squarePerimeter(side) {
	const perimeter = 4 * side;
	return perimeter;
}

// Examples:
/**
 * 1-example: side = 5
 * 2-example: side = 6
 *
 */
console.log('example-1 area:', squareArea(5));
console.log('example-1 perimeter:', squarePerimeter(5));

console.log('example-2 area:', squareArea(6));
console.log('example-2 perimeter:', squarePerimeter(6));
// Natija: { perimeter: 20, area: 25 }
