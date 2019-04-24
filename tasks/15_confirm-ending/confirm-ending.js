export const confirmEnding = (str, end) => {
  return str.substr(str.length - end.length) === end;
};
