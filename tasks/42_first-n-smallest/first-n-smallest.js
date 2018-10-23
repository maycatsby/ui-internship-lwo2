export function firstNSmallest(arr, n) {
  while (n !== arr.length) {
    if (n > arr) return [0, 0, 0];
    let largest = Math.max(...arr);
    arr.splice(arr.lastIndexOf(largest), 1);
  }
  return arr;
}
