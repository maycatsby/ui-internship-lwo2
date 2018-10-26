export function smallestCommons(arr) {
  let min = Math.min(arr[0], arr[1]);
  let max = Math.max(arr[0], arr[1]);
  let smallest = min * max;
  let calc = 0;

  while (calc === 0) {
    for (let i = min; i <= max; i++) {
      if (smallest % i !== 0) {
        smallest += max;
        calc = 0;
        break;
      } else {
        calc = 1;
      }
    }
  }

  return smallest;
}
