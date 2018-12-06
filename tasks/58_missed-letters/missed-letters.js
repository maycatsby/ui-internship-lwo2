export function findLetter(str) {
  const arr = str.split('');
  const charCodeArr = [];
  let resultStr;
  arr.map((element, index, array) => {
    charCodeArr.push(element.charCodeAt());
  });
  const arrLength = charCodeArr.length;
  charCodeArr.map((element, index, array) => {
    if (index === arrLength) return;
    if (array[index + 1] - element > 1) {
      charCodeArr.splice(index + 1, 0, element + 1);
      resultStr = String.fromCharCode(element + 1);
    }
  });
  return resultStr;
}
