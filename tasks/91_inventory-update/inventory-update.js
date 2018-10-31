export function updateInventory(currArr, newArr) {
  const newWholeArr = currArr.concat(newArr);
  newWholeArr.forEach((value, index, arr) =>{
    for (let i = index + 1; i < arr.length; i++) {
      if (arr[i][1] === value[1]) {
        value[0] = arr[i][0] + value[0];
        arr.splice(i, 1);
        break;
      }
    }
  });
  return newWholeArr.sort((a, b) => {
    if (a[1][0] !== b[1][0]) {
      return a[1][0].charCodeAt(0) - b[1][0].charCodeAt(0);
    } else {
      let i = 1;
      while (a[1][i] === b[1][i]) {
        i++;
      }
      return a[1][i] - b[1][i];
    }
  });
}
