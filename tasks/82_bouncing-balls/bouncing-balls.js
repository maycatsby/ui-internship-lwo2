export const bouncingBall = (height, bounce, window) => {
  if (height < 0 || bounce >= 1 || bounce <= 0 || window > height) {
    return -1;
  }
  let seenByMum = 0;
  while (height > window) {
    if (!(seenByMum % 2)) {
      height *= bounce;
    }
    seenByMum++;
  }
  return seenByMum;
};


