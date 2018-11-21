export function humanYearsCatYearsDogYears(humanYears) {
  let catYears = 0;
  let dogYears = 0;
  if (humanYears <= 0 || typeof humanYears !== 'number') {
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
    catYears = (24) + (4 * humanYears - 8);
    dogYears = (24) + (5 * humanYears - 10);
  }
  return [humanYears, catYears, dogYears];
}
