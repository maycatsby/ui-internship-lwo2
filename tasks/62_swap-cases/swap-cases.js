export function swapCases(str) {
  let targetArr = str.split('');
  return targetArr.map((element, index) => {
    return element = element.toLowerCase(
    ) === element ? element.toUpperCase() : element.toLowerCase();
  }).join('');
}
