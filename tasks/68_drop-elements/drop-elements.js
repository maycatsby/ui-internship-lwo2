export function dropElements(arr, func) {
  while (arr.length > 0) {
    if (func(arr[0])) {
      break;
    } else {
      arr.shift();
    }
  }
  return arr;
}
