const name1 = 'kent';
const name2 = 'mark';
const name3 = 'john';
let names = ['kent', 'mark', 'john'];

const firstNamePerson2 = 'Mark';
const firstNamePerson3 = 'John';

const lastNamePerson2 = 'Smith';
const lastNamePerson3 = 'Doe';

const agePerson2 = 30;
const agePerson3 = 40;

const phonePerson2 = '098-765-4321';
const phonePerson3 = '135-792-4680';

// const firstNamePerson1 = 'Kent';
// const lastNamePerson1 = 'Beck';
// const agePerson1 = 20;
// const phonePerson1 = '123-456-7890';

// const person1 = {
// 	firstName: 'Kent',
// 	lastName: 'Dod',
// 	age: 20,
// 	phone: '123-456-7890',
// };

/* Dot notation */
// console.log(person1.firstName);

/* Bracket notation */
// console.log(person1['lastName']);

/**
 *
 * @param {string[]} keys
 */
// function displayPerson(keys) {
// 	const persons = {
// 		firstName: 'Kent',
// 		lastName: 'Don',
// 		age: 20,
// 		phone: '123-456-7890',
// 	};

// 	const key = keys[0]; // "firstName"

// 	const value = persons[key]; // "Kent"

// 	console.log(key, value);
// }

// displayPerson(['lastName', 'lastName']);

/* Object Reference */
// const user = {
// 	name: 'Arslonbek',
// 	job: 'Developer',
// 	salary: 1000,
// }; // SM_user_001 = HM_0001

// const user2 = user; // SM_user2_002 = HM_0001

// user2.name = 'Boburbek'; // HM_0001.name = "Boburbek"
// console.log(user);

// function displayDays(user) {
// 	const currentYear = 2025;
// 	const currentMonth = 1;

// 	const age = currentYear - user.birthYear;
// 	const diffMonth = Math.abs(currentMonth - user.birthMonth);
// 	const neverLiveDays = diffMonth * 30;
// 	const allLiveDays = 365 * age - neverLiveDays;

// 	user.age = age; // HM_0001.age = age
// 	user.allLiveDays = allLiveDays; // HM_0001.allLiveDays = allLiveDays
// }

// const person = { birthYear: 2000, birthMonth: 2, birthDay: 20 }; // HM_0001

// displayDays(person); // displayDays(HM_0001)

// console.log('person = ', person);
// age: 22
// allLiveDays: 22*365 - 29 = 9120

/* Object key */

const key = 'firstName';
const value = 'Reks';
const animal = {
	[key]: value,
};

console.log(animal);
