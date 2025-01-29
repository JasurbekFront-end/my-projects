const flashElm = document.querySelector('.flash');
const timerElm = document.querySelector('.timer');

const statuses = {
	RED: {
		nextStatus: 'RED-YELLOW',
		time: 5,
	},
	'RED-YELLOW': {
		nextStatus: 'GREEN',
		time: 3,
	},
	GREEN: {
		nextStatus: 'GREEN-YELLOW',
		time: 10,
	},
	'GREEN-YELLOW': {
		nextStatus: 'RED',
		time: 3,
	},
};

function start() {
	let status = 'RED';
	let time = statuses[status].time;

	flashElm.innerText = status;
	timerElm.innerText = time;

	setInterval(() => {
		time--;
		timerElm.innerText = time;

		if (time === 0) {
			status = statuses[status].nextStatus; // GREEN
			time = statuses[status].time; // 10

			flashElm.innerText = status;
			timerElm.innerText = time;
		}
	}, 1000);
}

start();
