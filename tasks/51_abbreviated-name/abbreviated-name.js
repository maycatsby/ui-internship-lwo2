export function abbreviated(str) {
  const arr = str.split(' ');
  let arrNew = [];
  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      arrNew.push(arr[0]);
    } else {
      arrNew.push(arr[i][0] + '.');
    }
  }
  return arrNew.join(' ');
}
