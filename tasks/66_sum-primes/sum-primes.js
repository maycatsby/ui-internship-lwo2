export function sumPrimes(n) {
  const primeArr = [2];
  for ( let i = 3; i <= n; i+=2 ) {
    if ( isPrime(i) ) {
      primeArr.push(i);
    }
  }
  function isPrime(num) {
    for ( let i = 2; i < num; i++ ) {
      if ( num % i === 0 ) {
        return false;
      }
    }
    return true;
  }
  return primeArr.reduce((accum, value) => accum + value);
}
