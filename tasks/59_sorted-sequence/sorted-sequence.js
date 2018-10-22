export function uniteUnique(arr1, arr2, arr3) {
  let finalArray = [];
  for (let i = 0; i < arguments.length; i++) {
  // for (let i = 0; i < (...args).length; i++) {//doesn't work
    /* eslint-disable-next-line */
    let arrayArguments = arguments[i];
    // let arrayArguments = (...args)[i];//doesn't work
    const leng = arrayArguments.length;
    for (let j = 0; j < leng; j++) {
      let indexValue = arrayArguments[j];
      if (finalArray.indexOf(indexValue) < 0) {
        finalArray.push(indexValue);
      }
    }
  }
  return finalArray;
}
