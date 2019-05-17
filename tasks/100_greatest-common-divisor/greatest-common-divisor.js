export const greatestCommonDivisor = (num1, num2) => {
  let smallerNumber = Math.min(num1, num2);
  let greaterNumber = Math.max(num1, num2);
  while (smallerNumber > 0) {
    let remainder = greaterNumber % smallerNumber;
    greaterNumber = smallerNumber;
    smallerNumber = remainder;
  }
  return greaterNumber;
};

