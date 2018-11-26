export function sumPrimes(num) {
  let sum = 0;

  function checkPrime(n) {
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }
  for (let i = 2; i <= num; i++) {
    if (checkPrime(i)) {
      sum += i;
    }
  }

  return sum;
}
