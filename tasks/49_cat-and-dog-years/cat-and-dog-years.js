export const humanYearsCatYearsDogYears = (humanAge) => {
  if (humanAge < 1) {
    return [0, 0, 0];
  }
  let two = humanAge > 1 ? 1 : 0;
  let threeOrMore = humanAge > 2 ? (humanAge - 2) : 0;
  let catAge = 15 + 9 * two + 4 * threeOrMore;
  let dogAge = 15 + 9 * two + 5 * threeOrMore;

  return [humanAge, catAge, dogAge];
};

