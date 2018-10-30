export function findCloseIndex(str, start) {
  const strLength = str.length;
  let differ = 0;
  for (let i = start; i < strLength; i++) {
    if (str[start] !== '(') return -1;
    if (str[i] == '(') differ++;
    if (str[i] == ')') differ--;
    if (differ == 0) return i;
  }
}
