export function checkLetters(array) {
  const str = array[0].toLowerCase();
  const copy = array[1].toLowerCase().split('');
  const copyLen = copy.length;
  for (let i = 0; i < copyLen; i++) {
    if (str.indexOf(copy[i]) === -1) {
      return false;
    }
  }
  return true;
}
