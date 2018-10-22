export function uniqueInOrder(str) {
  if (str.length < 2) return str;
  let targetArr = [];
  if (typeof str === 'string') {
    targetArr = str.split('');
  } else {
    targetArr = str;
  }
  return targetArr.filter((value, index, array) =>{
    return value !== array[index - 1];
  });
}
