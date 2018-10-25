const alphabet = 'abcdefghijklmnopqrstuvwxyz';
export function findLetter(str) {
  function letterIndex(text, index) {
    let letter = text.charAt(0);
    if (alphabet.indexOf(letter) !== index) {
      return alphabet.charAt(index);
    } else {
      return letterIndex(text.substring(1), index + 1);
    }
  }
  if (alphabet.indexOf(str) === -1) {
    return letterIndex(str, alphabet.indexOf(str.charAt(0)));
  }
  return undefined;
}
