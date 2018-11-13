export function firstNSmallest(arr, k) {
  const final = [];
  const arrLeng = arr.length;
  for (let i = k; i < arrLeng; ++i) {
    let maxVar = arr[k - 1];
    let pos = k - 1;
    for (let j = k - 2; j >= 0; j--) {
      if (arr[j] > maxVar) {
        maxVar = arr[j];
        pos = j;
      }
    }
    if (maxVar > arr[i]) {
      let j = pos;
      while (j < k - 1) {
        arr[j] = arr[j + 1];
        j++;
      }
      arr[k - 1] = arr[i];
    }
  }
  for (let i = 0; i < k; i++) {
    final.push(arr[i]);
  }
  return final.slice(0, arr.length);
}
