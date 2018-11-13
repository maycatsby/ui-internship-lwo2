/* eslint "require-jsdoc": 0 */

export function getNumbers(str) {
  let regex = /\d+/g;
  let res = str.match(regex);
  let newArr = res.map((el) => {
    return Number(el);
  });
  return newArr;
}
