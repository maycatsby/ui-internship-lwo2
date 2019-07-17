export const firstNSmallest = (arr, num) => {
  let newArray = arr.slice(0);
  let arrMin = arr.sort((a, b) => a - b).slice(0, num);
  let a = newArray.filter((cur) => arrMin.indexOf(cur) !== -1);
  let diff = a.length - arrMin.length;
  if (diff > 0) {
    a.splice((-diff));
  }
  return a;
};

/*
export const firstNSmallest = (arr, num) => {
  let newArray = arr.slice(0);
  let arrMin = arr.sort((a, b) => a - b).slice(0, num);
  let a = newArray.filter((cur) => arrMin.indexOf(cur) !== -1);
  let diff = a.length - arrMin.length;
  if (diff > 0) {
    a.splice((-diff));
  }
  return a;
};
*/
