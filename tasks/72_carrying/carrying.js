export function addTogether(...args) {
  const passArgs = args.slice();
  if (+args[0] !== args[0]) return undefined;
  if (args.length === 2 && (+args[0] === args[0] && +args[1] === args[1])) {
    return args[0] + args[1];
  } else if (args.length === 1) {
    return function(secondArg) {
      if (+secondArg === secondArg) {
        return secondArg + passArgs[0];
      } else return undefined;
    };
  }
}
