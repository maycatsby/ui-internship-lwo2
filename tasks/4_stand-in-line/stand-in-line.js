/* eslint "require-jsdoc": 0 */

export function nextInLine(arr, number) {
  arr.push(number);
  let last= arr.shift(number);
  return last;
}
