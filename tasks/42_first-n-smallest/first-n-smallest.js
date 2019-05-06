export const firstNSmallest = (arr, num) => {
  let loopAmount = arr.length - num;
  let newArray = arr.reverse();
  if (loopAmount >= 0) {
    for (let i = 0; i < loopAmount; i++) {
      let max = Math.max(...newArray);
      let index = newArray.indexOf(max);
      newArray.splice(index, 1);
    }
    return newArray.reverse();
  }
};
