// eslint-disable-next-line no-extend-native
String.prototype.camelCase = function() {
  return this.split(' ').map((cur) => {
    let begin = cur.charAt(0).toUpperCase();
    let end = cur.substring(1);
    return `${begin}${end}`;
  }).join('');
};
