/* Array sort method */
/* string */
// const names = ['alimbaev arslonbek', 'abinov arslonbek', 'boburbek'];

// names.sort();
// console.log('names = ', names);

/* number */
const nums = [0, 3, 11, 33, 40, 44, 100];

nums.sort((a, b) => a - b);
/**
 * cfr >= 0 => swap [a,b]
 * cfr < 0 => no swap [a,b]
 */
console.log('nums = ', nums);
