export class Person {
  constructor(fullName) {
    this._firstName = fullName.split(' ')[0];
    this._lastName = fullName.split(' ')[1];
  }

  getFirstName() {
    return this._firstName;
  }

  getLastName() {
    return this._lastName;
  }

  getFullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  setFirstName(firstName) {
    return this._firstName = firstName;
  }

  setLastName(lastName) {
    return this._lastName = lastName;
  }

  setFullName(fullName) {
    this._firstName = fullName.split(' ')[0];
    this._lastName = fullName.split(' ')[1];
    return `${this._firstName} ${this._lastName}`;
  }
}
