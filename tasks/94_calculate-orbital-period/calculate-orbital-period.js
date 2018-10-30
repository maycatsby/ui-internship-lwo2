const GM = 398600.4418;
const EARTH_RADIUS = 6367.4447;
function oPeriod(arr) {
  return Math.round(2*Math.PI*Math.sqrt(Math.pow(EARTH_RADIUS + arr['avgAlt'],
      3)/GM));
}
export function orbitalPeriod(arr) {
  /* eslint-disable-next-line */
  const args = arguments;
  let result;
  let ret = [];

  for (let i=0; i< args[0].length; i++) {
    result = oPeriod(args[0][i]);
    ret = ret.concat({'name': args[0][i]['name'],
      'orbitalPeriod': result});
  }

  return ret;
}
