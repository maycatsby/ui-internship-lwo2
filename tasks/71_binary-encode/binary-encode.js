export function binaryEncode(str) {
  if (!str) return '';
  const arr = str.split('');
  const encodedArr = [];
  arr.forEach((value) => {
    let pushValue = value.charCodeAt(0).toString(2);
    pushValue = '0'.repeat(8 - pushValue.length) + pushValue;
    encodedArr.push(pushValue);
  });
  return encodedArr.join(' ');
}
