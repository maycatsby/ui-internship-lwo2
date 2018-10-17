export function titleCase(str) {
  let arr = str.split(/\s/);
  for (let i = 0; i < arr.length; i++){
    arr[i] = arr[i].slice(0,1).toUpperCase()+arr[i].slice(1).toLowerCase();
  }
  return arr.join(' ');
}