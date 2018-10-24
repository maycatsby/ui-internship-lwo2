/* eslint "require-jsdoc": 0 */

export function palindrome(str) {
  let strLow = str.toLowerCase()
      .split('')
      /* eslint-disable-next-line */
      .filter((el) => !el.match(/[\s-!$%^&*()_+|~=`{}\[\]:";'<>?,./]/))
      .join('');
  let strArray = str.toLowerCase()
      .split('')
      /* eslint-disable-next-line */
      .filter((el) => !el.match(/[\s-!$%^&*()_+|~=`{}\[\]:";'<>?,./]/))
      .reverse()
      .join('');
  return strLow === strArray;
}
