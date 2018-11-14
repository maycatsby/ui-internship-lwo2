export function factorialize(number) {
  if (number == 0) return 1;
  let result = 1;
  while (number > 1) {
    result *= number;
    number--;
  }
  return result;
}
