export function onfirmEnding(str, word) {
  let newStr = str.split('');
  if (newStr[newStr.length-1] == word) {
    return true;
  }
}

// expect function onfirmEnding(str, word) {

// }
