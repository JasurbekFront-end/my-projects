const form = document.forms[0];
const emailInput = form.elements[0] as HTMLInputElement;
const passwordInput = form.elements[1] as HTMLInputElement;

emailInput.addEventListener('focus', (e) => {
	const input = e.target as HTMLInputElement;
	input.classList.add('bg-red-500');
});

emailInput.addEventListener('blur', (e) => {
	const input = e.target as HTMLInputElement;
	input.classList.remove('bg-red-500');
});

form.addEventListener('submit', (e) => {
	e.preventDefault();

	const email = emailInput.value;
	const password = passwordInput.value;

	console.log({ email, password });

	form.reset();
});

window.addEventListener('keypress', (e) => {
	const key = e.key;

	if (e.code.startsWith('Key') || e.code.startsWith('Digit')) emailInput.value += key;
});
