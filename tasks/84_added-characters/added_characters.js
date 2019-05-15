export const addedChar = (str1, str2) => {
  let str1Arr = str1.split('').sort();
  let str2Arr = str2.split('').sort();
  let addedLetter='';
  for (let i = 0; i < str1Arr.length; i++) {
    if (str1Arr[i] !== str2Arr[i]) {
      addedLetter = str2Arr[i];
      str2Arr.splice(i, 1);
      i--;
    }
  }
  return addedLetter ? addedLetter : str2Arr[str2Arr.length - 1];
};
