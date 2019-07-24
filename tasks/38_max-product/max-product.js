export const maxProduct = (arr) => {
  let arrOfMultiply = [];
  for (let i = 0; i < arr.length - 1; i++) {
    let multiplyScore = arr[i] * arr[i + 1];
    arrOfMultiply.push(multiplyScore);
  }
  return Math.max(...arrOfMultiply);
};
