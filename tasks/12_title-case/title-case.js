export function titleCase(str) {
  let newArr = str.split(' ');
  let arr = [];
  let final = [];
  let leng = newArr.length;
  for (let i=0; i<leng; ++i) {
    arr.push(newArr[i].toLowerCase());
    final.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1));
  }
  return (final.join(' '));
}
