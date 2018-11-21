export function orbitalPeriod(arrOfObjs) {
  const GM = 398600.4418;
  const EARTH_RADIUS = 6367.4447;
  const targetArr = arrOfObjs.slice();
  targetArr.forEach((value) => {
    const period = Math.round((2*Math.PI) *
      Math.sqrt(Math.pow(EARTH_RADIUS + value['avgAlt'], 3) / GM));
    value['orbitalPeriod'] = period;
    delete value['avgAlt'];
  });
  return targetArr;
}
