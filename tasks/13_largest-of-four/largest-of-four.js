
export function largestOfFour(arr) {
  let max = [];
  let arrMax = [];
  for (let i = 0; i<arr.length; ++i) {
    for (let j=0; j<arr[i].length; ++j) {
      max[j] = Math.max.apply(null, arr[j]);
      arrMax.push(max[j]);
    }
    return arrMax;
  }
}
