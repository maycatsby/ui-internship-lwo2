export function palindrome(str) {
  const targetStr = str.replace(/[\W_\s]+/g, '').toLowerCase();
  return targetStr.split('').reverse().join('') === targetStr;
}
