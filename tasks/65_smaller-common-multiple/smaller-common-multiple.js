export function smallestCommons(arr) {
  let min = Math.min(arr[0], arr[1]);
  let max = Math.max(arr[0], arr[1]);
  let smallest = min * max;
  let doneCalc = 0;
  while (doneCalc === 0) {
    for (let i = min; i <= max; i++) {
      if (smallest % i !== 0) {
        smallest += max;
        doneCalc = 0;
        break;
      } else {
        doneCalc = 1;
      }
    }
  }
  return smallest;
}
