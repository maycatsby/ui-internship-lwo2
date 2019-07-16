export const myReplace = (str, before, after) => {
  if (before[0] === before[0].toUpperCase()) {
    return str.replace(before, `${after[0].toUpperCase()}${after.slice(1)}`);
  }
  return str.replace(before, after);
};
