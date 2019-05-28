export const getAverage = (arr) => {
  let sum = arr.reduce((prev, cur) => prev + cur);
  let average = Math.floor(sum / arr.length);
  return average;
};

