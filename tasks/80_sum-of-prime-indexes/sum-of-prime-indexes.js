export const sumPrimeIndexedElements = (arr) => {
  let sum = 0;
  for (let j = 2; j < arr.length; j++) {
    let prime = true;
    for (let i = 2; i <= parseInt(Math.sqrt(j)) && prime; i++) {
      if (j % i === 0) {
        prime = false;
      }
    }
    if (prime) {
      sum += arr[j];
    }
  }
  return sum;
};
