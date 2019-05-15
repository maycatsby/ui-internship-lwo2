export const greatestCommonDivisor = (num1, num2) => {
  let smallerNumber = Math.min(num1, num2);
  for (let i = smallerNumber; i >= 1; i--) {
    if (num1 % i === 0 && num2 % i === 0) {
      return i;
    } else {
      continue;
    }
  }
};
