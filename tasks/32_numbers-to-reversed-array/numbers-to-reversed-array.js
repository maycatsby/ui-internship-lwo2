/* eslint-disable */
export function numberToReversedArray(str) { 
  str = str+'';
  let arr = str.split('').reverse();
  const arrLength = arr.length;
  for (let i = 0; i < arrLength ; i ++){
   arr[i] = +arr[i];
  }
  return arr;
}
