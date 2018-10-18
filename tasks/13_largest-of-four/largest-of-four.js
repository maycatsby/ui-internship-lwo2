export function largestOfFour(arr) {
  // let theLargestNumber = arr[0];
  let newArr = [];
  let maxForOne = arr[i][0];
  for (let i=0; i<arr.lenght; i++) {
    for (let j=0; j<arr[i].lenght; j++) {
      if (arr[i][j] > arr[i][0]) {
        arr[i][j] = maxForOne;
        newArr.push(maxForOne);
      }
    }
    // return newArr;
  }
  return newArr;
}
