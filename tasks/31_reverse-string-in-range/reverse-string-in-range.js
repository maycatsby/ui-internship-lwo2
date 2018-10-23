export function reverseStringInRange(str, arr) {
  let i = arr[0];
  let j = arr[1]+1;
  let sliceStr = str.slice(i, j);
  function reverseString(sliceStr) {
    if (sliceStr === '') {
      return '';
    } else {
      return reverseString(sliceStr.substr(1)) + sliceStr.charAt(0);
    }
  }
  let revStr = reverseString(sliceStr);
  let strBefore = str.slice(0, i);
  let strAfter = str.slice(j, str.lengt);
  return strBefore + revStr + strAfter;
}
