const list = [];
for (let i = 2; i <= 100; i++) {
  list.push(i);
}

function isPrime(n) {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i <= n/2; i++) {
    if (n%i === 0) {
      return false;
    }
  }
  return true;
}
let primeList = [];

export function numPrimorial(n) {
  for (let i = 0; i < list.length; i++) {
    primeList = list.filter(isPrime);
  }
  return primeList.slice(0, n).reduce((a, b) => a * b);
}
