export function dropElements(arr, func) {
  const targetArr = arr.slice();
  const arrLength = arr.length;
  for (let i = 0; i < arrLength; i++) {
    if (func(arr[i])) return targetArr;
    targetArr.shift();
    if (!targetArr.length) return targetArr;
  }
}
