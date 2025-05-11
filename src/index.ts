type BVariants = '100' | '200' | '300' | '500' | '400';
function summa<A extends number, B extends string = BVariants>(a: A, b: B) {
  return a + Number(b);
}

const a = summa(10, '400');

const nums: Array<number> = [];

nums.push(100);
