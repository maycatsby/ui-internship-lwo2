export function binaryDecode(str) {
  if (!str) {
    str = '';
  }
  let split = str.split(' ');
  let newArray = [];
  let result = [];

  for (let i = 0; i < split.length; i++) {
    newArray.push(parseInt(split[i], 2));
    result.push(String.fromCharCode(newArray[i]));
  }

  return result.join('');
}
