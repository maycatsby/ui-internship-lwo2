export function humanYearsCatYearsDogYears(humanYears) {
  let catYears;
  let dogYears;
  if (humanYears <= 0) {
    return [0, 0, 0];
  }
  if (humanYears === 1) {
    catYears = 15;
    dogYears = 15;
  }
  if (humanYears === 2) {
    catYears = 15 + 9;
    dogYears = 15 + 9;
  }
  if (humanYears > 2) {
    catYears = 16 + (4 * humanYears);
    dogYears = 14 + (5 * humanYears);
  }
  return [humanYears, catYears, dogYears];
}
