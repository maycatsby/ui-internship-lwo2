export function sortByBits(arr) {
  const targetArr = arr.slice();
  return targetArr.sort((a, b) => {
    let diff = a.toString(2).replace(
        /0/g, '') - b.toString(2).replace(/0/g, '');
    if (diff == 0) return a - b;
    return diff;
  });
}
