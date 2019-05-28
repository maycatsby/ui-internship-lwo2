export const uniteUnique = (...args) => {
  const argsArr = args.reduce((prev, cur) => [...prev, ...cur]);
  // eslint-disable-next-line no-undef
  return [...new Set(argsArr)];
};
