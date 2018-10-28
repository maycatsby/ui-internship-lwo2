export function insert(str, ...args) {
  const argsLength = args.length;
  let targetArr = str.split('');
  switch (argsLength) {
    case 1:
      return args[0] + str;
    case 2:
      targetArr.splice(args[1], 0, args[0].split(''));
      return targetArr.toString().replace(/,/g, '');
    default:
      return str;
  }
}
