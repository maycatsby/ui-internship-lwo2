export const minNumberToPrime = (arr) => {
  let primeNum = arr.reduce((prev, cur) => prev + cur);
  let numberToAdd = 0;

  for (let i = 2; i <= parseInt(Math.sqrt(primeNum)); i++) {
    if (primeNum % i == 0) {
      primeNum += 1;
      i = 1;
      numberToAdd++;
    }
  }
  return numberToAdd;
};
