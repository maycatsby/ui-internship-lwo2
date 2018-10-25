export function uniteUnique(...arr) {
  const uniqArr = arr[0].concat(...arr);
  return uniqArr.filter(function(a, b) {
    return uniqArr.indexOf(a)==b;
  });
}
