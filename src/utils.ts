import { faker } from '@faker-js/faker';

export function generateUsers(length = 5) {
  const users = Array.from({ length }, () => ({
    id: faker.string.uuid(),
    fullName: faker.person.fullName(),
    email: faker.internet.email(),
    age: faker.number.int({ min: 10, max: 30 })
  }));

  return structuredClone(users);
}
