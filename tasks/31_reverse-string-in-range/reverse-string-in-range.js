export function reverseStringInRange(str, arr) {
  let copyStr = str.split('');
  let chunk = copyStr.slice(arr[0], arr[1]+1).reverse().join('');
  copyStr.splice(arr[0], chunk.length, chunk);
  let final = copyStr.join('');
  return final;
}

