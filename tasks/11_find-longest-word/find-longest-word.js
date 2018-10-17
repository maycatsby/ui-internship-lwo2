export function findLongestWord(str) {
  var arr = str.split(/\W/);
  let maxLength =0;
  for (let i = 0; i < arr.length; i++){
    if (arr[i].length > maxLength){
      maxLength = arr[i].length;
    }
  }
  return maxLength;
}
