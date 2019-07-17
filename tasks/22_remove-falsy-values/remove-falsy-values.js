export const removeFalsyValues = (arr) => {
  return arr.filter((cur) => Boolean(cur) === true);
};
