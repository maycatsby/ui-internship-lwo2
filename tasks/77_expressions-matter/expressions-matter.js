export const expressionMatter = (...args) => {
  let arg = args.sort((a, b) => a - b);
  let [a, b, c] = [...arg];

  let sum = a + b + c;
  let multip = a * b * c;
  let multipAB = a * b + c;
  let multipBC = a + b * c;
  let bracketAB = (a + b) * c;
  let bracketBC = a * (b + c);

  return Math.max(sum, multip, multipAB, multipBC, bracketAB, bracketBC);
};
