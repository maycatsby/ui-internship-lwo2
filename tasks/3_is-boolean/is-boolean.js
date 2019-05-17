export const isBoolean = (value) => {
  let valType = typeof value;
  return valType === 'boolean'
   || (valType === 'object' && valType.valueOf() === 'boolean');
};

