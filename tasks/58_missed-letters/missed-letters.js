export function findLetter(str) {
  let firstCharacter = str.charCodeAt(0);
  let valueToReturn = '';
  let secondCharacter = '';
  const strLen = str.length;
  let addCharacters = function(a, b) {
    while (a - 1 > b) {
      b++;
      valueToReturn += String.fromCharCode(b);
    }
    return valueToReturn;
  };
  for (let i = 1; i < strLen; i++) {
    secondCharacter = str.charCodeAt(i);

    if (secondCharacter - firstCharacter > 1) {
      addCharacters(secondCharacter, firstCharacter);
    }
    firstCharacter = str.charCodeAt(i);
  }
  if (valueToReturn) {
    return valueToReturn;
  }
}
