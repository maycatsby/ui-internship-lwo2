export function findElement(arr, func) {
  let num;
  const arrLeng = arr.length;

  for (let i = 0; i < arrLeng; i++) {
    if (func(arr[i])) {
      num = arr[i];
      return num;
    }
  }

  return num;
}
