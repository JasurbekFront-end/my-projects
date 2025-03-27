const person = {
  firstName: 'Kent',
  lastName: 'Mark',
  age: 20,
  job: 'Teacher',
  address: {
    state: 'UZB',
    city: 'New York',
    getFullAddress() {
      const message = `${this.getFullName()} address is ${this.address.state}, ${this.address.city}`;

      return message;
    }
  },
  getFullName() {
    const fullName = `${this.firstName} ${this.lastName}`;
    return fullName;
  }
};

console.log(person.address.getFullAddress.call(person));
console.log(person.getFullName()); // 'Kent Mark'
