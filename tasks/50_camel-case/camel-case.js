/* eslint-disable*/
String.prototype.camelCase = function() {
  return this.split(' ').map((value, index, array) => {
    return value = value.slice(0, 1).toUpperCase() + value.slice(1);
  }
  ).join('');
};
