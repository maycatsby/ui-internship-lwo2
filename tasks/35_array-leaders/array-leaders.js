export function arrayLeaders(arr) {
  let newArr = [];
  const leng = arr.length;
  for (let i = 0; i < leng; i++) {
    let cur = 0;
    for (let j = i+1; j < leng; j++) {
      if (i !== leng-1) {
        cur += arr[j];
      } else {
        cur = arr[i];
      }
    }
    if (arr[i] > cur) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
