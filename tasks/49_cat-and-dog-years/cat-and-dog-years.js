export const humanYearsCatYearsDogYears = (humanAge) => {
  const ages = [humanAge, 0, 0];
  if (humanAge < 1) {
    return ages;
  }
  for (let i = 1; i < ages.length; i++) {
    let threeOrMore = i === 1 ? 4 : 5;
    switch (humanAge) {
      case 1:
        ages[i] = 15; break;
      case 2:
        ages[i] = 15 + 9; break;
      default:
        ages[i] = 15 + 9 + (humanAge - 2) * threeOrMore; break;
    }
  }
  return ages;
};
