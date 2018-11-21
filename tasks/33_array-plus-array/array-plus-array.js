export function arrayPlusArray(arr1, arr2) {
  const arr = [];
  for (let i = 0; i < Math.max(arr1.length, arr2.length); i++) {
    arr.push((arr1[i] || 0) + (arr2[i] || 0));
  }
  return arr;
}
