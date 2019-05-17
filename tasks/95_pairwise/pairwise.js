export const pairwise = (arr, num) => {
  if (!arr.length) {
    return 0;
  }
  let sumOfIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === num) {
        sumOfIndex += i + j;
        arr[i] = arr[j] = 'used';
        break;
      }
    }
  }
  return sumOfIndex;
};

