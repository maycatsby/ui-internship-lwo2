export function pairwise(arr, arg) {
  const copy = arr.slice();
  const leng = copy.length;
  let sum = 0;

  for (let i = 0; i < leng; i++) {
    for (let j = i + 1; j < leng; j++) {
      if (copy[i] + copy[j] === arg) {
        sum += i + j;
        copy[i] = NaN;
        copy[j] = NaN;
      }
    }
  }

  return sum;
}
