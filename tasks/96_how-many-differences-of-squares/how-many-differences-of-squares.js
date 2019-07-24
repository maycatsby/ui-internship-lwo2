export const squares = (number) => {
  let counter = 0;
  for (let i = 1; i <= number; i++) {
    if (i % 4 === 0 || i % 2 !== 0) {
      counter++;
    } else {
      continue;
    }
  }
  return counter;
};

/* second solution */
/*
export const squares = (num) => {
  return Math.floor(( num + 1 ) / 2 ) + Math.floor( num / 4 );
};
*/
