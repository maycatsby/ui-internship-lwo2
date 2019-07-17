export const addTogether = (...args) => {
  let isNotNum = args.filter((cur) => typeof(cur) !== 'number').length;

  if (isNotNum > 0) {
    return undefined;
  }

  if (args.length < 2) {
    return function(num) {
      return (typeof num === 'number') ? args[0] + num : undefined;
    };
  }
  return args[0] + args[1];
};

