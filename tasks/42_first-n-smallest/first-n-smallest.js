export function firstNSmallest(arr, n) {
  for (let i = 0; n !== arr.lengh; i++) {
    if (arr.length === n) break;
    if (n === 0) return [];
    let largest = Math.max(...arr);
    arr.splice(arr.lastIndexOf(largest), 1);
  }
  return arr;
}
