export function followTheSpy(arr) {
  let targetArr = arr.slice();
  let resultArr = [];
  const arrLength = arr.length;
  resultArr.push(arr[0][0], arr[0][1]);
  while (resultArr.length <= arrLength) {
    targetArr.map( (value) => {
      if (resultArr[resultArr.length - 1] === value[0]) {
        resultArr.push(value[1]);
      }
    });
  }
  return resultArr.join(', ');
}
