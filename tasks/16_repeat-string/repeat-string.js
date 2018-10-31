export function repeatStringNumTimes(str, times) {
  let returnStr = '';
  if (!isNaN(times)) {
    while (times > 0) {
      returnStr += str;
      times--;
    }
  }
  return returnStr;
}
