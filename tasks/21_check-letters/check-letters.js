export const checkLetters = (arr) => {
  const lowerCaseArr = arr.map((cur) => cur.toLowerCase());
  const isIncluded = (el) => lowerCaseArr[0].includes(el);
  return lowerCaseArr[1].split('')
      .every(isIncluded);
};

