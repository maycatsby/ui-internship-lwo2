export const bouncingBall = (height, bounce, window) => {
  return Math.floor(Math.log(window / height) / Math.log(bounce)) * 2 + 1;
};

/* Second solution */
// export const bouncingBall = (height, bounce, window) => {
//   if (height < 0 || bounce >= 1 || bounce <= 0 || window > height) {
//     return -1;
//   }
//   let seenByMum = 0;
//   while (height > window) {
//     if (!(seenByMum % 2)) {
//       height *= bounce;
//     }
//     seenByMum++;
//   }
//   return seenByMum;
// };
