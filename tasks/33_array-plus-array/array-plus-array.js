export function arrayPlusArray(arr1, arr2) {
  let total = [];
  const leng1 = arr1.length;
  const leng2 = arr2.length;
  if (leng1 === leng2) {
    for ( let i = 0; i < leng1; i++) {
      total.push(arr1[i]+arr2[i]);
    }
  } else if (leng1<leng2) {
    for ( let i = 0; i < leng1; i++) {
      total.push(arr1[i]+arr2[i]);
    }
    total.push(arr2[leng2-1]);
  } else if (leng2 < leng1) {
    for ( let i = 0; i < leng2; i++) {
      total.push(arr1[i]+arr2[i]);
    }
    total.push(arr1[leng1-1]);
  }
  return total;
}
