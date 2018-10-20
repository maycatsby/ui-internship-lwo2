/* eslint "require-jsdoc": 0 */

export function nextInLine(arr, num) {
  arr.push(num);
  let item = arr.shift();
  return item;
}
