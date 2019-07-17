export const maxTripletSum = (arr) => {
  // eslint-disable-next-line no-undef
  const uniqNumArr = [...new Set(arr)].sort((a, b) => {
    return a - b;
  });
  return uniqNumArr.slice(-3).reduce((prev, cur) => prev + cur);
};
