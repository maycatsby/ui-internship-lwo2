export const insert = (str, insertable, position = 0) => {
  let arrStr = str.split('');
  arrStr.splice(position, 0, insertable);
  return arrStr.join('');
};
