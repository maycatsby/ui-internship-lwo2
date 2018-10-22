export function getAverage(arr) {
  return Math.floor(arr.reduce((a, b) => a + b) / arr.length);
}
