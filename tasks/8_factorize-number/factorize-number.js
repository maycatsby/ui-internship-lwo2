/* eslint "require-jsdoc": 0 */

export function factorialize(num) {
  /* let result = num;
  if (num === 0 || num === 1) {
    return 1;
  }
  while (num > 1) {
    num--;
    result *= num;
  }
  return result;*/
  // recursive
  if (num === 0) {
    return 1;
  }
  return num * factorialize(num-1);
}
