/* eslint "require-jsdoc": 0 */
export function trimWhiteSpaces(str) {
  let newStr = str.split(' ').join('');
  return newStr;
}
