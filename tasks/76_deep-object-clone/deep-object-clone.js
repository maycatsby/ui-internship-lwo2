export const deepClone = (arg) => {
  let copyObject = {};
  let keysArr = Object.keys(arg);
  for (let i = 0; i < keysArr.length; i++) {
    if (arg[keysArr[i]] !== null && typeof arg[keysArr[i]] === 'object') {
      copyObject[keysArr[i]] = deepClone(arg[keysArr[i]]);
    } else {
      copyObject[keysArr[i]] = arg[keysArr[i]];
    }
  }

  return copyObject;
};
