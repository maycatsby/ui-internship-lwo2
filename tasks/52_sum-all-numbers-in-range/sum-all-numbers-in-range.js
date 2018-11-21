export function sumAll(arr) {
  let sum = 0;
  for (let i = Math.min.apply(null, arr); i <= Math.max.apply(null, arr); i++) {
    sum += i;
  }
  return sum;
}
