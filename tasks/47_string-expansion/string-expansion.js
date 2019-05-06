export const stringExpansion = (str) => {
  let num = 1;
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    let isNum = parseInt(str.charAt(i));
    if (!isNaN(isNum)) {
      num = isNum;
    } else {
      newStr += str.charAt(i).repeat(num);
    }
  }
  return newStr;
};
