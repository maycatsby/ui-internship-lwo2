export function rot13Encoder(str) {
  const strLength = str.length;
  let encodedArr = [];
  for (let i = 0; i < strLength; i++) {
    if (str[i].match(/[A-Z]/)) {
      encodedArr.push(str.charCodeAt(i) % 26 + 65);
    } else {
      encodedArr.push(str.charCodeAt(i));
    }
  }
  return String.fromCharCode.apply(null, encodedArr);
}
