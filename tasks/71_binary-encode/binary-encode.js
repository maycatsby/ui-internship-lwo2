export function binaryEncode(str) {
  if (str == undefined) {
    return '';
  }
  const arr = [];
  const padding = '00000000';
  for (let i = 0; i < str.length; i++) {
    let newStr = str.charCodeAt(i).toString(2);
    let padded = padding.substring(0, padding.length - newStr.length) + newStr;
    arr.push(padded);
  }
  return arr.join(' ');
}
