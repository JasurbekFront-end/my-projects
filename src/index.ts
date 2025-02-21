const container: HTMLDivElement = document.querySelector('#container')!;
const btn: HTMLButtonElement = document.querySelector('.btn')!;

document.addEventListener('click', () => console.log('Clicked DOCUMENT'), { capture: true });
document.documentElement?.addEventListener('click', () => console.log('Clicked HTML'), {
	capture: true,
});
document.body?.addEventListener('click', () => console.log('Clicked Body'), { capture: true });
container?.addEventListener('click', () => console.log('Clicked Container'), { capture: true });
btn?.addEventListener('click', () => console.log('Clicked Button'), { capture: true });
