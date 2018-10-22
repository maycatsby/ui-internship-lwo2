export function numberToReversedArray(str) {
  let reversedArr = str.toString().split('').reverse();
  let numArr = reversedArr.map((el) => {
    return Number(el);
  });
  return numArr;
}
