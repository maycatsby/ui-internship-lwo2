export function findEqualIndex(arr) {
  const arrLen = arr.length;
  let leftsum;
  let rightsum;
  for (let i = 0; i < arrLen; i++) {
    leftsum = 0, rightsum = 0;
    for (let j = 0; j < i; j++) {
      leftsum += arr[j];
    }
    for (let j = i + 1; j < arrLen; j++) {
      rightsum += arr[j];
    }
    if (leftsum == rightsum) {
      return i;
    }
  }
  if (leftsum != rightsum) {
    return -1;
  }
}
