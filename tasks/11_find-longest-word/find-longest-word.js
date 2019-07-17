export const findLongestWord = (value) => {
  const strArr = value.split(/\s/);
  return strArr.reduce((prev, cur) => {
    return prev.length < cur.length ? cur : prev;
  }).length;
};

