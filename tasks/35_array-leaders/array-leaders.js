export function arrayLeaders(arr) {
  const arrLength = arr.length;
  let leadersArr = [];
  for (let i = 0; i < arrLength; i ++ ) {
    let sum = 0;
    for (let j = i + 1; j < arrLength; j ++ ) {
      sum += arr[j];
    }
    if (arr[i] > sum) leadersArr.push(arr[i]);
  }
  return leadersArr;
}
