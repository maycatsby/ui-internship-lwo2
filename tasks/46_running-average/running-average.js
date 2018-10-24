export function runningAverage(num) {
  let times = 0;
  let value = 0;
  return function(number) {
    value += number;
    times ++;
    return value / times;
  };
}
