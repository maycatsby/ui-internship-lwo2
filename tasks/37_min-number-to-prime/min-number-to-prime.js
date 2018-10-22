export function minNumberToPrime(arr) {
  const arrSum = arr.reduce((a, b) => a + b);
  let desiredPrime = arrSum;
  for (let i = 2; i < desiredPrime; i++) {
    if (!(desiredPrime % i)) {
      desiredPrime++;
      i = 2;
    }
  }
  return desiredPrime - arrSum;
}
