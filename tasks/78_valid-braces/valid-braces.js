export function validBraces(str) {
  let strCopy = str;
  const iterations = str.length / 2 - 1;
  for (let i = 0; i < iterations; i++) {
    strCopy = strCopy.replace('{}', '');
    strCopy = strCopy.replace('[]', '');
    strCopy = strCopy.replace('()', '');
  }
  return !strCopy.length;
}
