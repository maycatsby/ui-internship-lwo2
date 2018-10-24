function isPrime(n) {
  if (n<=1) {
    return false;
  }
  for (let i = 2; i < n/2; i++) {
    if (n%i === 0) {
      return false;
    }
  }
  return true;
}
function findPrime(n) {
  let counter = 1;
  while (!isPrime(n + counter)) {
    counter++;
  }
  return counter;
}
export function minNumberToPrime(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  if (isPrime(sum)) {
    return 0;
  } else {
    let num = findPrime(sum);
    return (num);
  }
}
