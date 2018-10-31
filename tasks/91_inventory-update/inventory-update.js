function compareSecondColumn(a, b) {
  if (a[1] === b[1]) {
    return 0;
  } else {
    return (a[1] < b[1]) ? -1 : 1;
  }
}
export function updateInventory(curInv, newInv) {
  let i;
  let j;
  for (i = 0; i< curInv.length; i++) {
    for (j = 0; j< newInv.length; j++) {
      if (curInv[i][1] === newInv[j][1]) {
        curInv[i][0] += newInv[j][0];
        newInv.splice(j, 1);
        j--;
      }
    }
  }
  return curInv.concat(newInv).sort(compareSecondColumn);
}
