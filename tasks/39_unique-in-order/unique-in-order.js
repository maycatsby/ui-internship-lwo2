export function uniqueInOrder(str) {
  let arr1 = [];
  let arr2 = [];
  if (Array.isArray(str) === false) {
    arr2 = str.split('');
  } else {
    arr2 = str;
  }
  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] != arr2[i - 1]) {
      arr1.push(arr2[i]);
    }
  }
  return arr1;
}
