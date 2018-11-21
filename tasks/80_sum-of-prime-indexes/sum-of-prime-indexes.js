export function sumPrimeIndexedElements(arr) {
  if (arr.length == 0 || arr == undefined) {
    return 0;
  }
  let sum = findPrimes(arr).reduce(function(acc, cur) {
    return acc + cur;
  }, 0);
  return sum;
}

function findPrimes(arr) {
  let primes = [];
  let firstPrime = [];
  for (let i = 0; i < arr.length; i++) {
    let firstPrime = arr.filter(isPrime);
    return firstPrime;
  }
  return primes.push(firstPrime);
}

function isPrime(el, ind, arr) {
  let first = 2;
  while (first <= Math.sqrt(ind)) {
    if (ind % first++ < 1) {
      return false;
    }
  }
  return ind > 1;
}

