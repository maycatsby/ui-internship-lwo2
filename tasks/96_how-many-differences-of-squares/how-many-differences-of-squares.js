export function squares(number) {
  return Math.floor(number * 0.75) + 1 * (number % 4 === 1);
}
