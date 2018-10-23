export function abbreviated(str) {
  let splitName = str.split(' ');
  const leng = splitName.length;
  if (leng > 2) {
    /* eslint max-len: ["error", { "code": 100 }] */
    return (splitName[0] + ' ' + splitName[1].charAt(0) + '. ' + splitName[2].charAt(0)+'.');
  }
  if (leng === 2) {
    return (splitName[0] + ' ' + splitName[1].charAt(0) + '.');
  }
  if (leng === 1) {
    return str;
  }
  return splitName[0];
}
