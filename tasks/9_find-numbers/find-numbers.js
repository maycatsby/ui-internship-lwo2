export const getNumbers = (value) => {
  let arrOfDigits = value.match(/\d/g);
  return arrOfDigits.map((cur) => parseInt(cur));
};
