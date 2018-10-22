export function sumAll(arr) {
  let max = Math.max(arr[0], arr[1]);
  let min = Math.min(arr[0], arr[1]);
  let final = 0;
  for (let i=min; i <= max; i++) {
    final += i;
  }
  return (final);
}
