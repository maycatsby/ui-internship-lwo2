export function uniqueInOrder(iterable) {
  let finalArray = [];
  const leng = iterable.length;
  for (let i = 0; i < leng; i++) {
    if (iterable[i] !== iterable[i - 1]) {
      finalArray.push(iterable[i]);
    }
  }
  return finalArray;
}
