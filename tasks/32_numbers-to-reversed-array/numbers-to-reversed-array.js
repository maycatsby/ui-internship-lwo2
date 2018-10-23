export function numberToReversedArray(num) {
  let arr = String(num).split('').reverse().map(Number);
  return arr;
}

