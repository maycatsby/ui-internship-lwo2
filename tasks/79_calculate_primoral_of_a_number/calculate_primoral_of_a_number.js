export function numPrimorial(n) {
  function checkPrime(n) {
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }
  let primes = 1;
  let count = 0;
  let i=2;

  while ( count < n) {
    if ( checkPrime(i) ) {
      primes *= i;
      count++;
    }
    i++;
  }
  return primes;
}
