export function pairwise(arr, sum ) {
  const targetArr = arr.slice();
  const arrLength = arr.length;
  let counter = 0;
  targetArr.forEach((el, index ) => {
    for (let i = index + 1; i < arrLength; i++) {
      if (targetArr[i] + el === sum) {
        counter += i + index;
        targetArr[i] = '_';
        break;
      }
    }
  });
  return counter;
}
