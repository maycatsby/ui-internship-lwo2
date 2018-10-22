export function findEqualIndex(arr) {
  const arrLeng = arr.length;
  let leftsum = 0;
  let rightsum = 0;
  for (let i = 0; i < arrLeng; ++i) {
    for (let j = 0; j < i; j++) {
      leftsum = arr.reduce(function(leftsum, arr) {
        return leftsum + arr[j];
      }, j);
    }
    for (let j = i + 1; j < arrLeng; j++) {
      rightsum = arr.reduce(function(rightsum, arr) {
        return leftsum + arr[j];
      }, j);
    }
    if (leftsum == rightsum) {
      return i;
    }
  }
  if (leftsum != rightsum) {
    return -1;
  }
}
