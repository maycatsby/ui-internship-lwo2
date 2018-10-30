export function sumPrimeIndexedElements(arr) {
  const targetArr = arr.slice();
  const primeArr = [2];
  for (let i = 3; i < arr.length; i += 2) {
    if (isPrime(i)) {
      primeArr.push(i);
    }
  }
  function isPrime(num) {
    for (let i = 2; i < num; i ++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  return targetArr.reduce((accum, value, index) => {
    if (primeArr.indexOf(index) !== -1) {
      return accum + value;
    }
    return accum;
  }, 0);
}
