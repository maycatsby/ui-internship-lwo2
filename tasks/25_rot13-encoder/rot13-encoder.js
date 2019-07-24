export const rot13Encoder = (str) => {
  const calcCharCode = (el) => el.charCodeAt() + 13;
  const strArr = str.split('');
  let rot13Arr = strArr.map((cur) => {
    let curCharCode = calcCharCode(cur);
    if (curCharCode >= 78 && curCharCode <= 90) {
      return String.fromCharCode(curCharCode);
    } else if (curCharCode > 90 && curCharCode <= 103) {
      return String.fromCharCode(curCharCode - 90 + 64);
    } else {
      return String.fromCharCode(curCharCode - 13);
    }
  });
  return rot13Arr.join('');
};


