export function smallestCommons(arr) {
  const arrSort = arr.sort();
  const arrNew = [];
  for (let i = arrSort[0]; i <= arr[1]; i++) {
    arrNew.push(i);
  }
  let res = 0;
  let loop = 1;
  let n;
  do {
    res = arrNew[0] * loop * arrNew[1];
    for (n = 2; n < arrNew.length; n++) {
      if (res % arrNew[n] !== 0) {
        break;
      }
    }
    loop++;
  } while (n !== arrNew.length);
  return res;
}
