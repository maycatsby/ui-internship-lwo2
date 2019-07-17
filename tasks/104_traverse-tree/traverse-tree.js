export const traverseTree = (arg, callback) => {
  callback(arg);
  let next = arg.children;
  if (next.length) {
    next.forEach((cur) => traverseTree(cur, callback));
  }
};

