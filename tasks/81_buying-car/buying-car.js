/* eslint-disable*/
export function nbMonths(startPriceOld, startPriceNew, savingsPerMonth, percentLossByMonth) {
  const resArray = [];
  let currentMoney = startPriceOld;
  let oldCarPrice = startPriceOld;
  let newCarPrice = startPriceNew;
  let savedMoney = 0;
  let monthCounter = 0;
  let loss = percentLossByMonth;
  if (oldCarPrice > newCarPrice) {
    resArray[1] = currentMoney - newCarPrice;
    resArray[0] = 0;
    return resArray;
  }
  while (newCarPrice > currentMoney) {
    monthCounter++;
    loss += 0.5 * ((monthCounter + 1) % 2);
    newCarPrice *= (100 - loss) / 100;
    oldCarPrice *= (100 - loss) / 100;
    savedMoney += savingsPerMonth;
    currentMoney = savedMoney + oldCarPrice;
  }
  resArray.push(monthCounter);
  resArray.push(Math.floor(currentMoney - newCarPrice));
  return resArray;
}
