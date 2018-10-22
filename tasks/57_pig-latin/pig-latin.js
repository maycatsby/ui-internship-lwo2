export function translatePigLatin(str) {
  let pigLatin = '';
  let regex = /[aeiou]/gi;
  if (str[0].match(regex)) {
    pigLatin = str + 'way';
  } else {
    let vowelInd = str.indexOf(str.match(regex)[0]);
    pigLatin = str.substr(vowelInd) + str.substr(0, vowelInd) + 'ay';
  }
  return pigLatin;
}
