export function sumFibs(number) {
  const fibArr = [1, 1];
  for (let i = 2; fibArr.slice(-1) < number; i++) {
    fibArr.push(fibArr[i - 2] + fibArr[i - 1]);
  }
  return fibArr.reduce((accumulator, value) => {
    return value % 2 && value <= number ? accumulator + value : accumulator;
  });
}
