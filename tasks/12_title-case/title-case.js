export const titleCase = (value) => {
  const wordsArray = value.toLowerCase().split((/\s/g));
  const changedArray = wordsArray.map((cur) => {
    return `${cur.charAt(0).toUpperCase()}${cur.substring(1)}`;
  });
  return changedArray.join(' ');
};
