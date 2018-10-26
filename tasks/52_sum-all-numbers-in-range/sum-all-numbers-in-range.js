export function sumAll(arr) {
  return arr
      .sort((a, b) => a - b)
      .reduce((a, b) => (a + b) * (b - a + 1) / 2);
}
