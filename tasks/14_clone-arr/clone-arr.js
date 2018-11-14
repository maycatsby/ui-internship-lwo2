export function cloneArr(arr) {
  const clonedArray = [];
  arr.forEach((element) => {
    clonedArray.push(element);
  });
  return clonedArray;
}
