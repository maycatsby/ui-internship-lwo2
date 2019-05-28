export const sumFibs = (num) => {
  let result = 1;
  let fibonacci = [0, 1];
  let curFibNum = 0;
  for (let i = 2; curFibNum <= num; i++) {
    if (curFibNum % 2) {
      result += curFibNum;
    }
    curFibNum = fibonacci[i - 2] + fibonacci[i - 1];
    fibonacci.push(curFibNum);
  }
  return result;
};
