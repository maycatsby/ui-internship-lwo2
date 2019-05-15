export const updateInventory = (curInv, newInv) => {
  for (let i = 0; i < curInv.length; i++) {
    let index = newInv.findIndex((cur) => cur[1] === curInv[i][1]);
    if (index >= 0) {
      curInv[i][0] += newInv[index][0];
      newInv.splice(index, 1);
    }
  }
  curInv = newInv.length > 0 ? [...curInv, ...newInv] : curInv;
  return curInv.sort((a, b) => {
    if (a[1] < b[1]) {
      return -1;
    } else if (a[1] > b[1]) {
      return 1;
    } else {
      return 0;
    }
  });
};
