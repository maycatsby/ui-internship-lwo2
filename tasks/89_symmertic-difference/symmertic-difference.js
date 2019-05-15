export const sym = (...args) => {
  return args.reduce((cur, prev) => {
    let arrayEl = [...new Set(prev), ...new Set(cur)]
        .sort()
        .filter((cur, ind, arr) => {
          return cur !== arr[ind - 1] && cur !== arr[ind + 1];
        });
    return arrayEl;
  });
};
