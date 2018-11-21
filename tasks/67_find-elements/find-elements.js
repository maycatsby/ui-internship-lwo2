export function findElement(arr, func) {
  const arrLength = arr.length;
  for (let i = 0; i < arrLength; i++) {
    if (func(arr[i])) {
      return arr[i];
    }
  }
}
