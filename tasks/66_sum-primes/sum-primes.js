export const sumPrimes = (num) => {
  if (num < 2) {
    return 0;
  }
  let sumOfPrimes = 2;
  let prime;
  for (let j = 3; j <= num; j += 2) {
    prime = true;
    for (let i = 2; i <= parseInt(Math.sqrt(j)); i++) {
      if (j % i === 0) {
        prime = false;
        break;
      }
    }
    if (prime) {
      sumOfPrimes += j;
    }
  }
  return sumOfPrimes;
};
