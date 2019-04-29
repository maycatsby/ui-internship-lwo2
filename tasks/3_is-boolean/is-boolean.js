export const isBoolean = (value) => {
  let valueType = typeof value;
  if (valueType === 'boolean' ||
  (valueType === 'object' && valueType.valueOf() === 'boolean')) {
    return true;
  } else {
    return false;
  }
};

