export function checkLetters(arr) {
  const comparisonStr = arr[0].toLowerCase();
  const comparisonArr = arr[1].toLowerCase().split('');
  while (comparisonArr.length) {
    if (comparisonStr.indexOf(comparisonArr[0]) == -1) return false;
    comparisonArr.shift();
  }
  return true;
}
