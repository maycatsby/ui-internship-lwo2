export const Person = function(firstAndLast) {
  let fullName = firstAndLast;
  let arr = fullName.split(' ');

  this.getFirstName = function() {
    return arr[0];
  };

  this.getLastName = function() {
    return arr[1];
  };

  this.getFullName = function() {
    return fullName;
  };

  this.setFirstName = function(first) {
    arr[0] = first;
    fullName = arr.join(' ');
  };

  this.setLastName = function(last) {
    arr[1] = last;
    fullName = arr.join(' ');
  };

  this.setFullName = function(firstAndLast) {
    fullName = firstAndLast;
    arr = fullName.split(' ');
  };
};

let bob = new Person('Bob Ross');
bob.getFullName();
