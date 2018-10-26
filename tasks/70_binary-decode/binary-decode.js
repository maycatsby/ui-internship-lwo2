export function binaryDecode(str) {
  if (str) {
    return str.split(' ').map((value) =>
      String.fromCharCode(parseInt(value, 2)
      )).join('');
  }

  return '';
}
