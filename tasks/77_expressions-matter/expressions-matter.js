export function expressionMatter(a, b, c) {
  const firstExpr = a * (b + c);
  const secExpr = a * b * c;
  const thirdExpr = a + b * c;
  const fourExpr = (a + b) * c;
  const fifthExpr = a * b + c;
  const sixExpr = a + b + c;
  const sevExpr = (a + c) * b;

  return Math.max(firstExpr, secExpr, thirdExpr, fourExpr,
      fifthExpr, sixExpr, sevExpr);
}
