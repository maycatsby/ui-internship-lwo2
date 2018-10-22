export function getVowelCount(str) {
  let count = 0;
  let pattern = /[aeiou]/i;
  for (let i = 0; i < str.length; i++) {
    if (str[i].match(pattern)) {
      count++;
    }
  }
  return count;
}


