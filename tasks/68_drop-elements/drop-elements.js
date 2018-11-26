export function dropElements(arr, func) {
  let flag = false;

  return arr.filter((item) => {
    if (func(item)) {
      flag = true;
    }
    return flag;
  });
}
