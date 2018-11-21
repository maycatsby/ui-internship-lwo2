export function nbMonths(startPriceOld, startPriceNew, savingsPerMonth,
    percentLossByMonth) {
  if (startPriceOld > startPriceNew) {
    return [0, Math.round(startPriceOld - startPriceNew)];
  }

  let budget = savingsPerMonth;
  let percent = percentLossByMonth / 100.0;
  let diff = (startPriceNew - startPriceOld) * (1 - percent);
  let i = 0;
  while (budget < diff) {
    if (i%2 === 0) {
      percent += 0.005;
    }
    diff = diff * (1 - percent);
    budget += savingsPerMonth;
    i++;
  }
  return ([i+1, Math.round(budget - diff)]);
}
