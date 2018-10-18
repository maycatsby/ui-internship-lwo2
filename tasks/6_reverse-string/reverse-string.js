/* eslint "require-jsdoc": 0 */

export function reverseString(str) {
  let arr = str.split('');
  let rev = arr.reverse();
  let res = '';
  for (let i = 0; i < rev.length; i++) {
    res+= rev[i];
  }
  return res;
}
