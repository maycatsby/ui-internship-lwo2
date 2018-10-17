/* eslint "require-jsdoc": 0 */

export function reverseString(str) {
  let splitString = str.split('');
  let reverseArray = splitString.reverse();
  let joinArray = reverseArray.join('');
  return joinArray;
}
