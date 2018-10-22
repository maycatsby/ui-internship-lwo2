export function stringExpansion(str) {
  const leng = str.length;
  let result = '';
  let current;
  for (let i = 0; i < leng; i++) {
    if (!isNaN(str[i])) {
      current = str[i];
    } else if (isNaN(str[i])) {
      result+=str[i].repeat(current || 1);
    }
  }
  return result;
}
