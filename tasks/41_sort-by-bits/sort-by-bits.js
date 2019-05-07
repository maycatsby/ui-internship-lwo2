export const sortByBits = (arr) => {
  let arrSort = arr.sort((a, b) => {
    let aOne = a.toString(2).replace(/[0]/g, '').length;
    let bOne = b.toString(2).replace(/[0]/g, '').length;
    if (aOne > bOne) {
      return 1;
    } else if (aOne < bOne) {
      return -1;
    } else {
      return a - b;
    }
  });
  return arrSort;
};


/* Second solution:

 export const sortByBits = (arr) => {
  let arrOfOne = arr.map((cur) => {
    return {val: cur, length: cur.toString(2).replace(/[0]/g, '')};
  });
  return arrOfOne.sort((a, b) => (a.length - b.length || a.val - b.val))
      .map((cur) => cur.val);
};

*/
