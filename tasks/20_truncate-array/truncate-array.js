
export function truncateArray(arr, n) {
  let newArr=[];
  if (n>0) {
    newArr = arr.splice(n, arr.length-1);
    return newArr;
  } else {
    return arr;
  }
}
