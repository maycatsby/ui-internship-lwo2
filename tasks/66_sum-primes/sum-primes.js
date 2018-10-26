function isPrime(value) {
  for (let i = 2; i < value; i++) {
    if (value % i === 0) {
      return false;
    }
  }
  return value > 1;
}

export function sumPrimes(num) {
  let arrNew = [];
  for (let i = 1; i <= num; i++) {
    arrNew.push(i);
  }
  let arrPrime = [];
  for (let i = 0; i <= arrNew.length; i++) {
    if (isPrime(arrNew[i])) {
      arrPrime.push(arrNew[i]);
    }
  }
  let sum = arrPrime.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
  }, 0);
  return sum;
}
