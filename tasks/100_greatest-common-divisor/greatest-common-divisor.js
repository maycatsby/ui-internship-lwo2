export function greatestCommonDivisor(a, b) {
  return !b ? a : greatestCommonDivisor(b, a % b);
}
