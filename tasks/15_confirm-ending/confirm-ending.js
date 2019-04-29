export const confirmEnding = (str, end) => {
  return str.substring(str.length - end.length) === end;
};
