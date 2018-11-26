export function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const EARTH_RADIUS = 6367.4447;
  const newObj=[];
  let obj;

  /* eslint-disable */
  for (let i in arr) {
      const a = EARTH_RADIUS + arr[i].avgAlt;
      const orbitalPeriod = 2 * Math.PI * Math.sqrt(Math.pow(a, 3) / GM);
      const T = Math.round(orbitalPeriod);
      obj = Object.assign({}, arr[i], {orbitalPeriod: T});
      delete obj.avgAlt;
      newObj.push(obj);
  }

  return newObj;
}
