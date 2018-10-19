/* eslint-disable */

export function peopleInBus(busStops) {
    let totalCount = 0;
    let busStops_leng = busStops.length;
    for (let i=0; i< busStops_leng; i++) {
        let currentStop = busStops[i];
        let gettingOn = currentStop[0];
        let gettingOff = currentStop[1];
        totalCount += gettingOn;
        totalCount -= gettingOff;
    }
    return totalCount;
}