export const destroyer = (arr, ...args) => {
  return arr.filter((cur) => args.indexOf(cur) === (-1));
};

