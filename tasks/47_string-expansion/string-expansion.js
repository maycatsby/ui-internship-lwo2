export function stringExpansion(str) {
  let expandStr = '';
  let num = 1;
  const elem = str.split('');

  for (let i = 0; i < elem.length; i++) {
    if (isNaN(elem[i])) {
      expandStr += elem[i].repeat(num);
    } else {
      num = elem[i];
    }
  }
  return expandStr;
}
