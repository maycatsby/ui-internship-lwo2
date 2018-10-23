export function binaryDecode(str) {
  if (str) {
    return str.split(' ').map(function(value) {
      return String.fromCharCode(parseInt(value, 2));
    }).join('');
  }
  return '';
}
