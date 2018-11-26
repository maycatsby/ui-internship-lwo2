export function leastCommonMultiple(a, b) {
  function gcd(a, b) {
    return b ? gcd(b, a % b) : Math.abs(a);
  }

  return Math.abs(a * b) / gcd(a, b);
}

