export function runningAverage() {
  let n = 0;
  let sum = 0;
  return function(x) {
    n++;
    sum += x;
    return Math.round(sum/n*100)/100;
  };
}
