/* eslint "require-jsdoc": 0 */

export function repeatStringNumTimes(string, times) {
  if (times < 0) {
    return '';
  }
  if (times === 1) {
    return string;
  } else {
    return string + repeatStringNumTimes(string, times - 1);
  }
}
