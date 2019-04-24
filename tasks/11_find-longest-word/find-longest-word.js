export const findLongestWord = (value) => {
  return value.split(/\W/g).map((cur) => cur.length).reduce((prev, cur) => {
    return prev<cur ? cur : prev;
  }, 0
  );
};
