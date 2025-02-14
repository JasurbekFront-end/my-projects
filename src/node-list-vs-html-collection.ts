const boxes: NodeListOf<HTMLDivElement> = document.querySelectorAll('.box');
const boxes2 = document.getElementsByTagName('div') as HTMLCollectionOf<HTMLDivElement>;

boxes.forEach((box, idx) => {
	console.log(`boxes[${idx}].innerText = `, box.innerText);
});

const ArrayBoxes = Array.from(boxes2);
console.log('ArrayBoxes = ', ArrayBoxes);
ArrayBoxes.forEach((box, idx) => {
	console.log(`boxes[${idx}].innerText = `, box.innerText);
});
