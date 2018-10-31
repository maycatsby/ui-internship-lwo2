export function pairwise(arr, arg) {
  const arrCopy = arr.slice();
  let sum = 0;
  for (let i = 0; i < arrCopy.length; i++) {
    for (let j = i + 1; j < arrCopy.length; j++) {
      if (arrCopy[i] + arrCopy[j] == arg) {
        sum += i + j;
        arrCopy[i] = arrCopy[j] = NaN;
      }
    }
  }
  return sum;
}
