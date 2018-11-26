export function sumPrimeIndexedElements(arr) {
  function checkPrime(n) {
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }
  const leng = arr.length;
  const primearr = [];
  for (let i = 2; i < leng; ++i) {
    if ( checkPrime(i) ) {
      primearr.push(arr[i]);
    }
  }
  if (leng === 0) {
    return 0;
  }
  return primearr.reduce((a, b) => a+b);
}
