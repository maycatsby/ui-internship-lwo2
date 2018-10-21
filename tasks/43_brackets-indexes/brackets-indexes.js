export function findCloseIndex(text, openPos) {
  let currentPos = openPos;
  let counter = 1;
  while (counter > 0) {
    let elemAtNextPos = text[++currentPos];
    switch (elemAtNextPos) {
      case '(': counter++;
        break;
      case ')': counter--;
        break;
    }
  }
  return currentPos;
}
