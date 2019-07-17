export const sym = (...args) => {
  return args.reduce((prev, cur) => {
    let prevUniq = new Set(prev);
    let curUniq = new Set(cur);
    prevUniq.forEach((el) => {
      if (curUniq.has(el)) {
        prevUniq.delete(el);
        curUniq.delete(el);
      }
    });
    return [...prevUniq, ...curUniq];
  }).sort();
};

// export const sym = (...args) => {
//   return args.reduce((cur, prev) => {
//     let arrayEl = [...new Set(prev), ...new Set(cur)]
//         .sort()
//         .filter((cur, ind, arr) => {
//           return cur !== arr[ind - 1] && cur !== arr[ind + 1];
//         });
//     return arrayEl;
//   });
// };
