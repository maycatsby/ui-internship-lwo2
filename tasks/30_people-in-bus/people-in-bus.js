export function peopleInBus(busStops) {
  let totalCount = 0;
  let busStopsLeng = busStops.length;
  for (let i=0; i< busStopsLeng; i++) {
    let currentStop = busStops[i];
    let gettingOn = currentStop[0];
    let gettingOff = currentStop[1];
    totalCount += gettingOn;
    totalCount -= gettingOff;
  }
  return totalCount;
}
