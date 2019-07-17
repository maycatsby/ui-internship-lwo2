export const numberToReversedArray = (num) => {
  const arrDigit = num.toString().split('').map((cur) => parseInt(cur));
  return arrDigit.reverse();
};
