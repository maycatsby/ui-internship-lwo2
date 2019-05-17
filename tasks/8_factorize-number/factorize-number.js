export const factorialize = (value) => {
  let factorial = 1;
  for (let i = 1; i <= value; i++) {
    factorial *= i;
  }
  return factorial;
};
