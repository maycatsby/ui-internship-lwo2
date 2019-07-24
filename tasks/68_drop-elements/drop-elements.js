export const dropElements = (arr, func) => {
  let solution = [];
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      solution = arr.slice(i);
      break;
    }
  }
  return solution;
};

