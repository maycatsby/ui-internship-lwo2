export const convertToF = (celsius) => {
  let fahrenheit = Math.round(celsius * 9/5 + 32);
  return fahrenheit;
};
