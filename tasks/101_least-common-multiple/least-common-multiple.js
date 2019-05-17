export const leastCommonMultiple = (num1, num2) => {
  if (num1 === 0 || num2 === 0) {
    return 0;
  }
  const greatestCommonDivisor = (num1, num2) => {
    let smallerNumber = Math.min(num1, num2);
    let greaterNumber = Math.max(num1, num2);
    while (smallerNumber > 0) {
      let remainder = greaterNumber % smallerNumber;
      greaterNumber = smallerNumber;
      smallerNumber = remainder;
    }
    return greaterNumber;
  };
  return Math.abs(num1 * num2) / greatestCommonDivisor(num1, num2);
};
