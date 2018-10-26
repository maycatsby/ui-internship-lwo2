export class Person {
  constructor(fullName) {
    this.splitted = fullName.split(' ');
  }
  getFirstName() {
    this.firstName = this.splitted[0];

    return this.splitted[0];
  }
  getLastName() {
    this.lastName = this.splitted[1];

    return this.splitted[1];
  }
  getFullName() {
    this.fullName = this.firstName + ' ' + this.lastName;

    return this.fullName;
  }
  setFirstName(first) {
    this.firstName = first;

    return this.firstName;
  }
  setLastName(last) {
    this.lastName = last;

    return this.lastName;
  }
  setFullName(firstAndLast) {
    this.splitted = firstAndLast.split(' ');
    this.firstName = this.splitted[0];
    this.lastName = this.splitted[1];

    return this.firstName + ' ' + this.lastName;
  }
}
