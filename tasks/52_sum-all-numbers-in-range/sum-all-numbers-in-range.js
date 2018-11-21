export function sumAll(arr) {
  const arrMax = Math.max(arr[0], arr[1]);
  const arrMin = Math.min(arr[0], arr[1]);
  let sum = 0;
  for (let i = arrMin; i <= arrMax; i++) {
    sum += i;
  }
  return sum;
}
