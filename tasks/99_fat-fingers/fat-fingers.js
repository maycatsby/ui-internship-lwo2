export function fatFingers(str) {
  const leng = str.length;
  let flag = false;
  let newStr = '';

  for (let i = 0; i < leng; i++) {
    if (str[i].toLowerCase() === 'a') {
      flag = !flag;
      continue;
    }
    if (flag) {
      newStr += str[i].toUpperCase();
    } else {
      newStr += str[i];
    }
  }

  return newStr;
}
