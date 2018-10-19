export const destroyer = (arr, ...args) => {
  const arrLength = arr.length;
  const argsLength = args.length;
  for (let i = 0; i < arrLength; i++) {
    for (let j = 0; j < argsLength; j++) {
      if (arr[i] === args[j]) {
        delete arr[i];
      }
    }
  }
  return arr.filter(Boolean);
};
