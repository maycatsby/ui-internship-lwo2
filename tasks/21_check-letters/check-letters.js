export const checkLetters = (arr) => {
  const lowerCaseArr = arr.map((cur) => cur.toLowerCase());
  const secondElArr = lowerCaseArr[1].split('')
      .map((cur) => lowerCaseArr[0].includes(cur));
  return secondElArr.indexOf(false) === (-1);
};

