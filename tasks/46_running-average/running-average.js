export function runningAverage(num) {
  let total = 0;
  let timesCalled = 0;
  return function(n) {
    timesCalled++;
    total += n;
    return Math.round(total / timesCalled * 100) / 100;
  };
}
