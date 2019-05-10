export const palindrome = (str) => {
  let pureLetters = str.toLowerCase().replace(/[\W_]/g, '');
  let reversed = pureLetters.split('')
      .reverse()
      .join('');
  return (pureLetters === reversed);
};
