export const fatFingers = (str) => {
  const arrayOfString = str.split(/[Aa]/);
  return arrayOfString.map((cur, ind) => {
    if (ind === 0) {
      return cur;
    } else if (ind % 2 === 1) {
      return cur.toUpperCase();
    } else {
      return cur.toLowerCase();
    }
  }).join('');
};
