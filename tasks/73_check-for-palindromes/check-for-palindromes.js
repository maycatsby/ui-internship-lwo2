export function palindrome(str) {
  const formated = str.replace(/[\W_]/g, '').toLowerCase();
  const newStr = formated.split('').reverse().join('');
  return formated === newStr;
}

