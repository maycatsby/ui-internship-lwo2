/* eslint-disable */

export function numberToReversedArray(num) {
let str = num.toString();
let arr = str.split('').reverse();
let leng = arr.length;
  let final = [];
for (let i = 0; i<leng; ++i) {
    final.push(Number(arr[i]));
}
return final;
}