export const translatePigLatin = (string) => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  if (vowels.includes(string[0])) return string + 'way';
  let newStr = string.split('');
  return newStr;
};
