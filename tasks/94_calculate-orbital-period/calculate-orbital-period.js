export const orbitalPeriod = (arr) => {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  return arr.map((cur) => {
    let orbitalRadius = earthRadius + cur.avgAlt;
    let velocity = Math.sqrt( GM / orbitalRadius );
    return {
      name: cur.name,
      orbitalPeriod: Math.round(2 * Math.PI * orbitalRadius / velocity),
    };
  });
};
