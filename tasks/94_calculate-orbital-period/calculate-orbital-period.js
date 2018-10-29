export function orbitalPeriod() {
  const GM = 398600.4418;
  const EARTH_RADIUS = 6367.4447;
  const totalRadius = EARTH_RADIUS + avgAlt;
  const orbitalPeriod = Math.round(((2 * Math.PI) * totalRadius) / Math.sqrt(GM / totalRadius));
}
