export const nbMonths = (priceOld, priceNew, saveMonth, percLoss ) => {
  let savings = priceOld;
  let time = 0;

  while (savings < priceNew) {
    time++;
    percLoss = time % 2 === 0 ? 0.5 + percLoss : percLoss;
    priceOld -= (percLoss / 100) * priceOld;
    priceNew -= (percLoss / 100) * priceNew;
    savings = priceOld + saveMonth * time;
  }
  let leftMoney = Math.round(savings - priceNew);
  return [time, leftMoney];
};
