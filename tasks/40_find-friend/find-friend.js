export const findFriend = (arr) => {
  // eslint-disable-next-line no-undef
  let indexOfRed = new Set();

  for (let i = 0; i < arr.length - 2; i++) {
    let curRedIndex;
    let blue = 0;
    let red = 0;
    arr.slice(i, i + 3).forEach((cur, j) => {
      if (cur === 'red') {
        red++;
        curRedIndex = i + j;
      } else if (cur === 'blue') {
        blue++;
      }
    });
    if (blue === 2 && red === 1) {
      indexOfRed.add(curRedIndex);
    }
  }
  return indexOfRed.size;
};


