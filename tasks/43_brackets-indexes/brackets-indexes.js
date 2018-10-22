export function findCloseIndex(text, openPos) {
  let currentPos = openPos;
  let counter = 1;
  if (text[openPos] !== '(') {
    return -1;
  }
  while (currentPos < text.length) {
    let elemAtNextPos = text[++currentPos];
    if (elemAtNextPos === '(') {
      counter++;
    } else if (elemAtNextPos === ')') {
      counter--;
    }
    if (counter === 0) {
      return currentPos;
    }
  }
  return -1;
}
