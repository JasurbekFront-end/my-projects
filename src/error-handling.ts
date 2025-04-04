const users = [
  {
    id: 'e66378c7-9f36-48d9-a73f-7b61a7f565c6',
    fullName: 'Mrs. Lora Bradtke II',
    email: 'Reyna_Kovacek80@yahoo.com',
    age: 28
  },
  {
    id: '33eccff2-9954-4b7b-b016-2fa10f3ba710',
    fullName: 'Lydia Rath',
    email: 'Nia.Hermann32@gmail.com',
    age: 26
  },
  {
    id: 'fdeae613-8f5b-46d7-aedc-5d19063b17c3',
    fullName: 'Celia Considine',
    email: 'Luisa_Spinka78@gmail.com',
    age: 30
  },
  {
    id: 'd7478c92-3e87-4918-8c92-a0518eca6602',
    fullName: 'Annette Ullrich',
    email: 'Porter.Feeney56@hotmail.com',
    age: 10
  },
  {
    id: 'e5d3eac3-d6c9-4a38-a500-3111ceac1545',
    fullName: 'Dr. Gregory Zulauf',
    email: 'Aileen99@gmail.com',
    age: 23
  }
];

function search(value: string) {
  const searchedUsers = users.filter(user => {
    if (user.email.includes(value)) return true;
    if (user.fullName.includes(value)) return true;
  });

  if (searchedUsers.length === 0) {
    throw new Error(`${value.toLocaleUpperCase()} no results`);
  }

  return searchedUsers;
}

try {
  const values = search('nick');
  console.log('[NICK] = ', values);

  const values2 = search('Gregory');
  console.log('[Gregory] = ', values2);
} catch (error: any) {
  console.error(error.message);
}

try {
  const values = search('Gregory');
  console.log('[Gregory] = ', values);
} catch (error: any) {
  console.error(error.message);
}

const array = new Array(5);
console.log(array);

const obj = new Object();
console.log(obj);

const error = new Error('nimadir xato ketdi');
throw error;
