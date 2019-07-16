export const uniqueInOrder = (arg) => {
  let arrOfArg = [...arg];
  if (arg.length >= 1) {
    return arrOfArg.filter((cur, index, arr) => cur !== arr[index + 1]);
  } else {
    return [];
  }
};
