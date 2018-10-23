export function arrayLeaders(arr) {
  const arrFinal = [];
  for (let i = 0; i < arr.length; i++) {
    let val = 0;
    for (let j = i+1; j < arr.length; j++) {
      if (i !== arr.length - 1) {
        val += arr[j];
      } else {
        val = arr[i];
      }
    }
    if (arr[i] > val) {
      arrFinal.push(arr[i]);
    }
  }
  return arrFinal;
}
