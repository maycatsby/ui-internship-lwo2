/* eslint "require-jsdoc": 0 */

export function nextInLine(arr, item) {
  arr.push(item);
  return arr.shift();
}
