export const getIndexToInsert = (arr, arg) => {
  let sortArr = arr.sort((a, b) => a - b);
  let indexNum = sortArr.map((cur) => cur >= arg).indexOf(true);
  return indexNum !== (-1) ? indexNum : sortArr.length;
};


