/* eslint "require-jsdoc": 0 */
export const reverseStringInRange = (str, arr) => {
  let copy = str.slice().split('');
  let substr = str.split('').slice(arr[0], arr[1] + 1).reverse().join('');
  copy.splice(arr[0], substr.length, substr);
  return copy.join('');
};
