export const getIndexToInsert = (arr, arg) => {
  let sortArr = arr.sort((a, b) => a - b);
  let indexNum = sortArr.findIndex((cur) => cur >= arg);
  return indexNum !== (-1) ? indexNum : sortArr.length;
};


