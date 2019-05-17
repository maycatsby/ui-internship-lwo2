export const peopleInBus = (arr) => {
  return arr.reduce((prev, cur) => prev + cur[0] - cur[1], 0);
};

