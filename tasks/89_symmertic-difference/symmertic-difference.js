/* eslint-disable */
export function sym() {
  const arr = [].slice.call(arguments, 0);
  function diff(arr1, arr2) {
    return arr1.filter(function(val) {
      return !~arr2.indexOf(val);
    });
  }
  return arr.reduce(function(acc, cur) {
    return [].concat( diff(acc, cur), diff(cur, acc) )
        .filter(function(val, ind, self) {
          return self.indexOf(val) === ind;
        }).sort((a, b) => a - b);
  });
}
