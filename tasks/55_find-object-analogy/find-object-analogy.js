export const whatIsInAName = (arr, obj) => {
  const searchKey = Object.keys(obj);
  const searchValue = Object.values(obj);
  let contain;
  for (let i = 0; i < searchKey.length; i++) {
    contain = arr.filter((cur) => cur[searchKey[i]] === searchValue[i]);
  }
  return contain;
};
