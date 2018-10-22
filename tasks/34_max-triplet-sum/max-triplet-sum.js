export function maxTripletSum(arr) {
  function removeDuplicates(arr) {
    const uniqueArray = [];
    for (let i = 0; i < arr.length; i++) {
      if (uniqueArray.indexOf(arr[i]) == -1) {
        uniqueArray.push(arr[i]);
      }
    }
    return uniqueArray;
  }
  const newArr = removeDuplicates(arr);
  const sortArr= newArr.sort(function(a, b) {
    return b - a;
  });
  return sortArr.slice(0, 3).reduce((a, b) => a + b, 0);
}
