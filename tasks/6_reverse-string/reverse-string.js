/* eslint "require-jsdoc": 0 */

export function reverseString(str) {
  let splitString = str.split('').reverse().join('');
  // let reverseArray = splitString.reverse();
  // let joinArray = reverseArray.join('');
  return splitString;
}
