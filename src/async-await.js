function getGroup(delay) {
  const number = Math.floor(Math.random() * 100);
  const name = `pdp-${number}`;

  const promise = new Promise(resolve => {
    setTimeout(() => resolve(name), delay);
  });

  return promise;
}

/*ASYNC AWAIT*/
const group1 = await getGroup(1000);
const group2 = await getGroup(2000);
const group3 = await getGroup(3000);

console.log(group1);
console.log(group2);
console.log(group3);

/*PROMISE*/
getGroup(1000).then(group1 => {
  getGroup(2000).then(group2 => {
    getGroup(3000).then(group3 => {
      console.log(group1);
      console.log(group2);
      console.log(group3);
    });
  });
});
