export const findEqualIndex = (arr) => {
  let leftSide = 0;
  let rightSide = arr.reduce((prev, cur) => prev + cur);
  let index = -1;
  for (let i = 0; i < arr.length; i++) {
    rightSide -= arr[i];
    if (leftSide === rightSide) {
      return index = i;
    } else {
      leftSide += arr[i];
    }
  }
  return index;
};
