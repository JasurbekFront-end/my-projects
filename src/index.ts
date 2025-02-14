// type Person = {
// 	name: string;
// 	age: number;
// };

interface Animal {
	name: string;
	age: number;
}

interface Fish extends Animal {
	swimTime: number;
}

interface Dog extends Animal {
	runTime: number;
}

const fish: Fish = {
	name: 'Nemo',
	age: 20,
	swimTime: 10,
};

const dog: Dog = {
	name: 'Reks',
	age: 10,
	runTime: 20,
};

const animals: Dog[] = [];
const firstAnimal = animals[0];
firstAnimal.name
