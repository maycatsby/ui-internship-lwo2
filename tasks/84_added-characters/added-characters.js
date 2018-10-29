/* eslint "require-jsdoc": 0 */
export const addedChar = (string1, string2) => {
  string1 = string1.split('').sort().join('');
  string2 = string2.split('').sort().join('');
  const str1Length = string1.length;
  const str2Length = string2.length;
  for (let i = 0; i < str1Length; i++) {
    if (string1[i] !== string2[i]) {
      return string2[i];
    }
  }
  return string2[str2Length - 1];
};
