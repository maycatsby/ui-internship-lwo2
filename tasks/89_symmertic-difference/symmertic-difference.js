export function sym(arr1, ...args) {
  const argsArr = args.slice();
  let resArr = filterDuplicates(arr1.slice());
  const filteredArr =[];
  argsArr.forEach((value) => {
    filteredArr.push(filterDuplicates(value));
  });
  filteredArr.forEach((value) =>{
    resArr = resArr.filter((innerValue) => {
      const check = (value.indexOf(innerValue) !== -1);
      if (check) {
        value.splice(value.indexOf(innerValue), 1);
      }
      return !check;
    }).concat(value);
  });
  function filterDuplicates(arr) {
    return arr.filter((value, index) =>{
      return arr.indexOf(value) === index;
    });
  }
  return resArr.sort((a, b) => a - b);
}
