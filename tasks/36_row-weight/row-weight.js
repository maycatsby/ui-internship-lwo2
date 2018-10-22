export function rowWeights(arr) {
  const arrLength = arr.length;
  let oddWeight = 0;
  let evenWeight = 0;
  for (let i = 0; i < arrLength; i++) {
    (i % 2) ? oddWeight += arr[i] : evenWeight += arr[i];
  }
  const weights = [];
  weights.push(evenWeight, oddWeight);
  return weights;
}
