export const runningAverage = () => {
  let arr = [];
  return (num) => {
    arr.push(num);
    return arr.reduce((prev, cur) => prev + cur) / arr.length;
  };
};
