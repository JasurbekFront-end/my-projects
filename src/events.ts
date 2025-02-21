const body = document.body;
const button: HTMLButtonElement = document.querySelector('button')!;

const bodyClickHandler = () => console.log('BODY');

body.addEventListener('click', bodyClickHandler);
body.addEventListener('click', bodyClickHandler);

button.addEventListener('click', () => {
	console.log('BUTTON');
	body.removeEventListener('click', bodyClickHandler);
});
