export type Operation = '+' | '-' | '*';
export type Question = {
	number1: number;
	number2: number;
	operation: Operation;
	answers: Array<number>;
	correctAnswer: number;
};
