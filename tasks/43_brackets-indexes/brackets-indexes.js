export function findCloseIndex(str, pos) {
  let openBracCount = 0;
  let bracPos = -1;
  let index = -1;
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char === '(') {
      openBracCount++;
      if (i === pos) {
        bracPos = openBracCount;
      }
    } else if (char === ')') {
      if (openBracCount === bracPos) {
        index = i;
        break;
      }
      openBracCount--;
    }
  }
  return index;
}


