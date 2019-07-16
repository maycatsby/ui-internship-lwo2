export const fatFingers = (str) => {
  const arrOfStr = str.split(/[Aa]/);
  return arrOfStr.reduce((prev, cur, ind) => {
    if (ind % 2 === 1) {
      return `${prev}${cur.toUpperCase()}`;
    } else {
      return `${prev}${cur.toLowerCase()}`;
    }
  });
};


