export function expressionMatter(...args) {
  const resultsArr = [];
  resultsArr.push(args[0] + args[1] + args[2]);
  resultsArr.push(args[0] * args[1] * args[2]);
  resultsArr.push(args[0] * (args[1] + args[2]));
  resultsArr.push(args[0] * args[1] + args[2]);
  resultsArr.push((args[0] + args[1]) * args[2]);
  resultsArr.push(args[0] + args[1] * args[2]);
  resultsArr.push((args[2] + args[0]) * args[1]);
  return Math.max.apply(null, resultsArr);
}
