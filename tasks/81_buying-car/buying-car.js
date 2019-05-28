export const nbMonths = (price1, price2, saveMonth, lossOfPerc ) => {
  let priceOld = price1;
  let priceNew = price2;
  let percLoss = lossOfPerc;
  let savings = priceOld;
  let time = 0;

  while (savings < priceNew) {
    time++;
    percLoss = time % 2 === 0 ? 0.5 + percLoss : percLoss;
    priceOld -= (percLoss / 100) * priceOld;
    priceNew -= (percLoss / 100) * priceNew;
    savings = priceOld + saveMonth * time;
  }
  const leftMoney = Math.round(savings - priceNew);
  return [time, leftMoney];
};
