/* eslint-disable*/
export function fatFingers(str) {
  const targetStr = str;
  let resStr = targetStr.slice(0, targetStr.indexOf('a', 0));
  let position = 0;
  let uppercased = 0;
  while (targetStr.indexOf('a', position) !== -1) {
    let indexOfA = targetStr.indexOf('a', position);
    position = indexOfA + 1;
    if (uppercased) {
      resStr += targetStr.slice(indexOfA + 1, targetStr.indexOf('a', position)).toLowerCase();
      uppercased = 0;
    } else {
      resStr += targetStr.slice(indexOfA + 1, targetStr.indexOf('a', position)).toUpperCase();
      uppercased = 1;
    }
  }
  return resStr + targetStr.slice(-1);
}
