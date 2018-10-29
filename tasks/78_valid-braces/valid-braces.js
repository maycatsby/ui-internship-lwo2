export function validBraces(str) {
  const openingBrackets = ['[', '{', '('];
  const closingBrackets = [']', '}', ')'];
  const temp = [];
  let matchingOpeningBracket;
  let char;

  for (let i = 0; i < str.length; i++) {
    char = str[i];

    if (closingBrackets.indexOf(char) > -1) {
      matchingOpeningBracket = openingBrackets[closingBrackets.indexOf(char)];
      if (temp.length == 0 || (temp.pop() != matchingOpeningBracket)) {
        return false;
      }
    } else {
      temp.push(char);
    }
  }
  return true;
}
