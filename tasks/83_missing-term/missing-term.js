export const findMissing = (arr) => {
  const difference = Math.min(arr[1] - arr[0], arr[2] - arr[1]);
  for (let i = 0; i < arr.length; i++) {
    if ((arr[i + 1] - arr[i]) !== difference) {
      return arr[i] + difference;
    }
  }
  return '';
};
