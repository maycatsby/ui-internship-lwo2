export function arrayLeaders(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let cur = 0;
    for (let j = i+1; j < arr.length; j++) {
      if (i != arr.length-1) {
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
