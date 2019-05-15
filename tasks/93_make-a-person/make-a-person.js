export class Person {
  constructor(fullName) {
    this.firstName;
    this.lastName;
    this.fullName = fullName;
  }

  getFirstName() {
    return this.firstName = this.fullName.split(' ')[0];
  }

  getLastName() {
    return this.lastName = this.fullName.split(' ')[1];
  }

  getFullName() {
    return this.fullName;
  }

  setFirstName(firstName) {
    this.fullName = `${firstName} ${this.fullName.split(' ')[1]}`;
    return this.firstName = firstName;
  }

  setLastName(lastName) {
    this.fullName = `${this.fullName.split(' ')[0]} ${lastName}`;
    return this.lastName = lastName;
  }

  setFullName(fullName) {
    return this.fullName = fullName;
  }
}
