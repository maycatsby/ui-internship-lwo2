export function minNumberToPrime(arr) {
  let sumOfAll = arr.reduce((sum, curr) => sum + curr);
  let result = 0;
  let check = true;
  while (check) {
    for (let i = sumOfAll - 1; i > 2; i--) {
      if (sumOfAll % i == 0) check = false;
    }
    if (check != true) {
      sumOfAll++;
      result ++;
      check = true;
    } else break;
  }
  return result;
}
