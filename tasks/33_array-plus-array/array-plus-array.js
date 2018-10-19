
export function arrayPlusArray(arr1, arr2) {
  let total = [];
  if (arr1.length == arr2.length) {
    for ( let i = 0; i < arr1.length; i++) {
      total.push(arr1[i]+arr2[i]);
    }
  } else if (arr1.length<arr2.length) {
    for ( let i = 0; i < arr1.length; i++) {
      total.push(arr1[i]+arr2[i]);
    }
    total.push(arr2[arr2.length-1]);
  } else if (arr2.length<arr1.length) {
    for ( let i = 0; i < arr2.length; i++) {
      total.push(arr1[i]+arr2[i]);
    }
    total.push(arr1[arr1.length-1]);
  }
  return total;
}
