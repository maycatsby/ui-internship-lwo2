export const titleCase = (value) => {
  let wordsArray = value.toLowerCase().split((/\s/g));
  let changedArray = wordsArray.map((cur) => {
    return `${cur.charAt(0).toUpperCase()}${cur.substr(1)}`;
  });
  return changedArray.join(' ');
};
