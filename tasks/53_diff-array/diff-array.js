export function diffArray(arr1, arr2) {
  const concatArr = arr1.concat(arr2);











  
  const uniqArr = concatArr.filter(function(a, b) {
  return concatArr.indexOf(a)==b;
});
  return uniqArr;
}
