export function updateInventory(arr1, arr2) {
  const leng1 = arr1.length;
  const leng2 = arr2.length;
  for (let i = 0; i < leng1; i++) {
    for (let j = 0; j < leng2; j++) {
      if (arr1[i][1] === arr2[j][1]) {
        arr1[i][0] += arr2[j][0];
      }
    }
  }
  for (let j = 0; j < arr2.length; j++) {
    let found = 0;
    for (let i = 0; i < leng1; i++) {
      if (arr1[i][1] === arr2[j][1]) {
        found = 1;
      }
    }
    if (found === 0) {
      arr1.push(arr2[j]);
    }
  }
  return arr1.sort((a, b) => a[1] > b[1] ? 1 : -1);
}
