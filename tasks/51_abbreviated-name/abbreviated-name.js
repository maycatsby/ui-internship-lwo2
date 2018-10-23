export function abbreviated(str) {
  let strCut = str.split(' ');
  if (strCut.length == 1) return str;
  for (let i = 1; i < strCut.length; i++) {
    let curr = strCut[i].split('');
    curr.splice(1, curr.length, '.');
    strCut.splice(i, 1, curr.join(''));
  }
  return strCut.join(' ');
}
