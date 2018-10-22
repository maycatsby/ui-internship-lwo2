export function abbreviated(str) {
  let splited = str.split(' ');
  const leng = splited.length;
  if (leng === 1) {
    return str;
  }
  for (let i = 1; i < leng; ++i) {
    let current = splited[i].split('');
    const curLeng = current.length;
    current.splice(1, curLeng, '.');
    splited.splice(i, 1, current.join(''));
  }
  return splited.join(' ');
}
