console.time('getElementById');
const box = document.getElementById('box');
console.timeEnd('getElementById');

console.time('querySelector');
const boxQuery = document.querySelector<HTMLDivElement>('#box');
console.timeEnd('querySelector');
