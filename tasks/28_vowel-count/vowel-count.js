export const getVowelCount = (str) =>{
  let pattern = /[aeiou]/gi;
  let vowelAmount = str.match(pattern);
  return vowelAmount ? vowelAmount.length : 0;
};

