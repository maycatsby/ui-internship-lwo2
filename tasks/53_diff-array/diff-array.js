export function diffArray(arr1, arr2) {
  const targetArr = arr1.concat(arr2);
  return targetArr.filter(function(element, position) {
    return targetArr.indexOf(element) === targetArr.lastIndexOf(element);
  });
}
