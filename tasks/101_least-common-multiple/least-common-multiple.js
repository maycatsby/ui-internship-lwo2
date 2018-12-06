export function leastCommonMultiple(num1, num2) {
  function greatestCommonDivisor(a, b) {
    return !b ? a : greatestCommonDivisor(b, a % b);
  }
  const gcd = greatestCommonDivisor(num1, num2);
  return gcd * num1 / gcd * num2 / gcd;
}
