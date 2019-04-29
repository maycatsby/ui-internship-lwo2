export const getVowelCount = (str) =>{
  let pattern = /[aeiou]/gi;
  let vowelAmount = str.split('').filter((cur) => cur.match(pattern)).length;
  return vowelAmount;
};

