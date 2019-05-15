export const leastCommonMultiple = (num1, num2) => {
  let greaterNumber = Math.max(num1, num2);
  let smallerNumber = Math.min(num1, num2);
  let multiple;
  for (let i = 1; i < 10; i++) {
    multiple = greaterNumber * i;
    if (multiple % smallerNumber === 0) {
      return multiple;
    }
  }
};
