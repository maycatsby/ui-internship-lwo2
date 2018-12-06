export function findEqualIndex(arr) {
  let leftArr = [];
  let rightArr = [];
  let neededIndex = 0;
  arr.map((value, index) => {
    leftArr = arr.slice(0, index);
    rightArr = arr.slice(index + 1);
    if (leftArr.length && rightArr.length) {
      let leftSum = leftArr.reduce((a, b) => a + b);
      let rightSum = rightArr.reduce((a, b) => a + b);
      if (leftSum === rightSum) neededIndex = index;
    }
  });
  if (neededIndex) {
    return neededIndex;
  }
  return -1;
}
