export const unpackArray = (arr) => {
  return arr.reduce((Arr, val) => {
    return Array.isArray(val) ? Arr.concat(unpackArray(val)) : Arr.concat(val);
  }, []);
};
