export function findCloseIndex(text, openPos) {
  let currentPos = openPos;
  let counter = 1;
  if (text[openPos] !== '(') {
    return -1;
  }
<<<<<<< HEAD
  while (currentPos < text.length) {
    let elemAtNextPos = text[++currentPos];
    if (elemAtNextPos === '(') {
      counter++;
    } else if (elemAtNextPos === ')') {
=======
  while (currentPos<text.length) {
    let elemAtNextPos = text[++currentPos];
    if (elemAtNextPos == '(') {
      counter++;
    } else if (elemAtNextPos == ')') {
>>>>>>> 9e2e511865ef3bf259363d52fe7e757cecabbc6f
      counter--;
    }
    if (counter === 0) {
      return currentPos;
    }
  }
  return -1;
}
