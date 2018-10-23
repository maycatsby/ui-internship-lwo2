export function dropElements(arr, func) {
  let flag = false;
  const newArr = arr.filter((item) => {
    if (func(item)) {
      flag = true;
    }
    return flag;
  });
  return newArr;
}
