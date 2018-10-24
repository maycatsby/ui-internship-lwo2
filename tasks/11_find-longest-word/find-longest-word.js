export function findLongestWord(str) {
  let arr = str.split(' ');
  let max = 0;
  let lengArr = [];
  for (let i=0; i < arr.length; ++i) {
    lengArr.push(arr[i].length);
  }
  max = Math.max.apply(null, lengArr);
  return Number(max);
}
