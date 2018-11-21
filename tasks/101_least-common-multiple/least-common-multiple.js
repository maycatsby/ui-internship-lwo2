function greatestCommonDivisor(a, b) {
  if (a === 0) {
    return b;
  }
  while (b!=0) {
    if (a > b) {
      a -= b;
    } else {
      b -= a;
    }
  }
  return a;
}

export function leastCommonMultiple(a, b) {
  return a / greatestCommonDivisor(a, b) * b;
}
