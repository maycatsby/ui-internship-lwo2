export function getIndexToInsert(arr, value) {
  arr.push(value);
  const sortArr = arr;
  sortArr.sort((a, b) => {
    return a - b;
  });
  return arr.indexOf(value);
}
