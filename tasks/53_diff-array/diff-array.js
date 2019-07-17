export const diffArray = (arr1, arr2) => {
  for (let i = arr1.length - 1; i >= 0; i--) {
    arr2 = arr2.filter((cur) => {
      if (cur === arr1[i]) {
        arr1.splice(i, 1);
        return false;
      }
      return true;
    } );
  }
  return [...arr1, ...arr2];
};

// second solution
/* export const diffArray = (arr1, arr2) => {
    // eslint-disable-next-line no-undef
    const uniqEl = [...new Set([...arr1, ...arr2])];
    let diffEl = [];
    for (let i = 0; i < uniqEl.length; i++) {
      if (arr1.indexOf(uniqEl[i]) === (-1) ||
      arr2.indexOf(uniqEl[i]) === (-1)) {
        diffEl.push(uniqEl[i]);
      }
    }
    return diffEl;
  };*/
