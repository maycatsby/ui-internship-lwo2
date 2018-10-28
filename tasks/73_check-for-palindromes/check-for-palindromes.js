export function palindrome(str) {
  let newStr = str.replace(/[^\w]|_/g, '').toLowerCase();
  let reversed = newStr.split('').reverse().join('');
  return newStr === reversed;
}
