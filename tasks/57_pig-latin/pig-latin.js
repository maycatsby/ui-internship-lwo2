export const translatePigLatin = (str) => {
  const vowel = /[aeiou]/;
  if (vowel.test(str[0])) {
    return `${str}way`;
  }
  let firstVow = str.indexOf(...str.match(vowel));
  let newWord = `${str.slice(firstVow)}${str.slice(0, firstVow)}ay`;
  return firstVow > -1 ? newWord : str;
};


