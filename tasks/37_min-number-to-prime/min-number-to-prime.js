export function minNumberToPrime(arr) {
  function isPrime(n) {
    if (n <= 1) {
      return false;
    }
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }
  function findPrime(n) {
    let num = n + 1;
    while (num) {
      if (isPrime(num)) {
        return num;
      }
      num++;
    }
    return 0;
  }
  let sum = 0;
  const leng = arr.length;
  for (let i = 0; i < leng; i++) {
    sum += arr[i];
  }
  if (isPrime(sum)) {
    return 0;
  }
  let num = findPrime(sum);
  return num - sum;
}
