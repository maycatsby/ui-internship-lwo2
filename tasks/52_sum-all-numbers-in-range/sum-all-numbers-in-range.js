export function sumAll(arr) {
  const max = Math.max(arr[0], arr[1]);
  const min = Math.min(arr[0], arr[1]);
  let final = 0;
  for (let i = min; i <= max; i++) {
    final += i;
  }
  return final;
}
