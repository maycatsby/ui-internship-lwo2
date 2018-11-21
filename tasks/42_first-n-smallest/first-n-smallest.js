export function firstNSmallest(arr, number) {
  let resultArr = [];
  let minArr = arr.slice().sort((a, b) => a - b).slice(0, number);
  while (resultArr.length < number) {
    arr.map((value, index, array) => {
      if (minArr.indexOf(value) !== -1) {
        resultArr.push(value);
      }
    });
  }
  return resultArr.slice(0, number);
}
