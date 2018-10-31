export function palindrome(str) {
  const baseStr = str.toLowerCase().replace(/[\W_]/g, '');
  const toCheckStr = baseStr.split('').reverse().join('');
  return baseStr === toCheckStr;
}
