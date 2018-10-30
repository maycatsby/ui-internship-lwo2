export function findMissing(arr) {
  const arrLength = arr.length;
  const step = (arr[arrLength - 1] - arr[0]) / arrLength;
  for (let i = 0; i < arrLength; i++) {
    if (arr[i + 1] !== arr[i] + step) {
      return arr[i] + step;
    }
  }
}
