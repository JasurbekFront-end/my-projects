// function help<TName>(name: TName): TName[] {
//   return [name];
// }

// function go<T>(value: T) {
//   return { value };
// }

// const a = help('arslonbek')[0];
// const b = help(123)[0];
// const c = go('arslonbek'); // { box: 'box' }

// console.log(a);
// console.log(b);
// console.log(c);

// function help<T extends string, U extends number>(a: T, b: U) {
//   return { a, b };
// }

// const a = help('arslonbek', 20); // { name: "arslonbek" }
// const b = help('123', 20);
// const c = help('244', 20);

// type CoffeeOrTee<T> = T extends 'pdp' ? 'coffee' : T extends 'home' ? 'tea' : never;
// const a: CoffeeOrTee<'pdp'> = 'coffee';
// const b: CoffeeOrTee<'home'> = 'tea';
// const c: CoffeeOrTee<'street'> = 'coffee';
