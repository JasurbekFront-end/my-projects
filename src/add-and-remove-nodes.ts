/* Inserting Nodes into the DOM  */
const container: HTMLDivElement = document.querySelector('.container')!;

const box4 = container.children[3];
container.removeChild(box4);

console.log(box4);
