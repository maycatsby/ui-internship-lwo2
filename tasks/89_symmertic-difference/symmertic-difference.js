/* eslint "require-jsdoc": 0 */
export function sym() {
  let arr = [];
  let simddif = [];
  const argsLength = arguments.length;
  for (let i = 0; i < argsLength; i++) {
    /* eslint-disable-next-line */
    arr.push(unique(arguments[i]));
  }
  function unique(arr) {
    return arr.filter((e, i, a) => a.indexOf(e) == i);
  }
  const arrLength = arr.length;
  for (let i = 1; i < arrLength; i++) {
    if (i === 1) {
      simddif = diffArray(arr[0], arr[1]);
    } else {
      simddif = diffArray(simddif, arr[i]);
    }
  }
  function diffArray(arr1, arr2) {
    let newArr = [];
    arr1.forEach((val) => {
      if (arr2.indexOf(val) < 0) newArr.push(val);
    });
    arr2.forEach((val) => {
      if (arr1.indexOf(val) < 0) newArr.push(val);
    });
    return newArr;
  }
  return simddif.sort();
}
