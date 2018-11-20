export function diffArray(arr1, arr2) {
  let newArr = arr1.concat(arr2);
  function checkDiff(item) {
    if (arr1.indexOf(item) === -1 || arr2.indexOf(item) === -1) {
      return item;
    }
  }
  return newArr.filter(checkDiff);
}
