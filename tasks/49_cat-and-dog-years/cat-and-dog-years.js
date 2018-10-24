export function humanYearsCatYearsDogYears(humanYears) {
  switch (humanYears) {
    case 1: return [1, 15, 15];
    case 2: return [2, 24, 24];
    default: return [humanYears, 24 + 4 * (humanYears - 2),
      24 + 5 * (humanYears - 2)];
  }
}
