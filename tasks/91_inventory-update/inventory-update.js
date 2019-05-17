export const updateInventory = (curInv, newInv) => {
  let newInvArg = newInv;
  for (let i = 0; i < curInv.length; i++) {
    let index = newInvArg.findIndex((cur) => cur[1] === curInv[i][1]);
    if (index >= 0) {
      curInv[i][0] += newInvArg[index][0];
      newInvArg.splice(index, 1);
    }
  }
  curInv = newInvArg.length > 0 ? [...curInv, ...newInvArg] : curInv;
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
