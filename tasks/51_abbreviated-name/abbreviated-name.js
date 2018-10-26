export function abbreviated(str) {
  const arr = str.split(' ');
  let arrNew = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    arrNew.push(arr[i][0] + '.');
  }
  return arrNew.join(' ');
}
