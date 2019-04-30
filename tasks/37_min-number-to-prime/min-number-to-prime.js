export const minNumberToPrime = (arr) => {
  let sumOfArr = arr.reduce((prev, cur) => prev + cur);
  let numberToAdd;

  for (let i = 0; ; i++) {
    let primeNum = sumOfArr + i;
    let condition123 = (primeNum === 1 || primeNum === 2 || primeNum === 3);
    let condition23 = (primeNum % 2 === 0 || primeNum % 3 === 0);
    let condition57 = (primeNum % 5 === 0 || primeNum % 7 === 0);

    if (primeNum <= 7 && ( condition123 || condition57)) {
      numberToAdd = i; break;
    } else if (condition23 || condition57) {
      continue;
    } else {
      numberToAdd = i; break;
    }
  }
  return numberToAdd;
};
