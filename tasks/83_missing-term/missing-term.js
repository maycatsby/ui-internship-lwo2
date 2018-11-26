export function findMissing(arr) {
  const leng = arr.length;
  const last = arr.length-1;
  const diff = (arr[last] - arr[0]) / leng;
  let miss;
  for (let i = 0; i < last; i++) {
    if (arr[i+1] - arr[i] !== diff) {
      miss = arr[i] + diff;
    }
  }
  return miss;
}
