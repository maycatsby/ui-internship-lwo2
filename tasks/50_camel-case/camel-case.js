/* eslint-disable-next-line */
String.prototype.camelCase = function() {
  return this.split(' ').map(function(a) {
    return a[0].toUpperCase() + a.slice(1);
  }).join('');
};
