export class Person {
  constructor(fullName) {
    this.fName = fullName.split(' ')[0];
    this.lName = fullName.split(' ')[1];
  }
  getFullName() {
    return this.fName + ' ' + this.lName;
  }
  getFirstName() {
    return this.fName;
  }
  getLastName() {
    return this.lName;
  }
  setFirstName(first) {
    this.fName = first;
  }
  setLastName(last) {
    this.lName = last;
  }
  setFullName(firstAndLast) {
    this.fName = firstAndLast.split(' ')[0];
    this.lName = firstAndLast.split(' ')[1];
  }
}
