export function numberToReversedArray(num) {
  let str = num.toString();
  let arr = str.split('').reverse();
  const leng = arr.length;
  let final = [];
  for (let i = 0; i<leng; ++i) {
    final.push(Number(arr[i]));
  }
  return final;
}
