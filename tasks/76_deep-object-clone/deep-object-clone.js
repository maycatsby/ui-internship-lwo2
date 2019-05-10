export const deepClone = (arg) => {
  let copyObject = {};
  let keysArr = Object.keys(arg);
  for (let i = 0; i < keysArr.length; i++) {
    copyObject[keysArr[i]] = deepClone(arg[keysArr[i]]);
  }
  return copyObject;
};
