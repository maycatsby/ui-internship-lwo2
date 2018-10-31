function getArrayDiff(arr, arrTemp) {
  let ret = [];
  if (!(Array.isArray(arr) && Array.isArray(arrTemp))) {
    return ret;
  }
  let i;
  let key;
  for (i = arr.length - 1; i >= 0; i--) {
    key = arr[i];
    if (-1 === arrTemp.indexOf(key)) {
      ret.unshift(key);
    }
  }
  return ret;
}
function removeSmallest(arr) {
  let min = Math.min.apply(null, arr);
  return arr.filter((e) => {
    return e != min;
  });
}
let arrMin;
let minCount;
export function firstNSmallest(arr, n) {
  let arrTemp = Array.from(arr);
  let sum = 0;
  while (sum < n) {
    arrMin = Math.min.apply(null, arrTemp);
    minCount = arrTemp.filter((x) => x === arrMin).length;
    sum = sum + minCount;
    arrTemp = removeSmallest(arrTemp);
  }
  arrTemp = getArrayDiff(arr, arrTemp);
  return arrTemp.slice(0, n);
}
