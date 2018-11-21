export function arrayPlusArray(arr1, arr2) {
  let firstArr;
  let secondArr;
  if (arr1.length >= arr2.length) {
    firstArr = arr1;
    secondArr = arr2;
  } else {
    firstArr = arr2;
    secondArr = arr1;
  }
  const fArrLength = firstArr.length;
  let sumArr = [];

  for (let i = 0; i < fArrLength; i ++) {
    if (secondArr[i]) {
      sumArr.push(firstArr[i] + secondArr[i]);
    } else {
      sumArr.push(firstArr[i]);
    }
  }
  return sumArr;
}
