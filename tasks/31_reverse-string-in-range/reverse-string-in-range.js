/* eslint-disable */
export function reverseStringInRange(str, pointsArr) {
  let arr = str.split('');
  let reversePart = arr.splice(pointsArr[0], pointsArr[1] - pointsArr[0] + 1).reverse();
  arr.splice(pointsArr[0], 0, ...reversePart);
  const reversedString = arr.join('');
  return reversedString;
}
