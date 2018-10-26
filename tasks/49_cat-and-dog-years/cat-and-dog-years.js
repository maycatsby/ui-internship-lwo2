/* eslint "require-jsdoc": 0 */
export const humanYearsCatYearsDogYears = (human) => {
  let catAge;
  let dogAge;
  const dogFirst = 15;
  const dogSecond = 9;
  const dogNext = 5;
  const catFirst = 15;
  const catSecond = 9;
  const catNext = 4;
  if (human === 1) {
    catAge = catFirst;
    dogAge = dogFirst;
  }
  if (human === 2) {
    catAge = catFirst + catSecond;
    dogAge = dogFirst + dogSecond;
  }
  if (human > 2) {
    catAge = catFirst + (catNext * human) + 1;
    dogAge = dogFirst + (dogNext * human) - 1;
  }
  return [human, catAge, dogAge];
};
