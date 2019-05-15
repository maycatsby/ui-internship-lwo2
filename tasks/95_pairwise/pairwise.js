export const pairwise = (arr, num) => {
  if (!arr.length) {
    return 0;
  }
  let sumOfIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    let index = arr.findIndex((cur, index) => {
      return arr[i] + cur === num && index !== i;
    });
    if (index !== -1) {
      sumOfIndex += i + index;
      arr[i] = arr[index] = 'used';
    }
  }
  return sumOfIndex;
};

