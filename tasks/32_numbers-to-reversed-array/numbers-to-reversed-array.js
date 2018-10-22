export function numberToReversedArray(str) {
  const reversedArr = str.toString().split('').reverse();
  const numArr = reversedArr.map((el) => {
    return Number(el);
  });
  return numArr;
}
