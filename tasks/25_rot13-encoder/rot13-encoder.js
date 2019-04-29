export const rot13Encoder = (str) => {
  let newUtfNum = str.split('').map((cur) => cur.charCodeAt() + 13);
  let rot13Arr = newUtfNum.map((cur) => {
    if (cur >= 78 && cur <= 90) {
      return String.fromCharCode(cur);
    } else if (cur > 90 && cur <= 103) {
      return String.fromCharCode(cur - 90 + 64);
    } else {
      return String.fromCharCode(cur - 13);
    }
  });
  return rot13Arr.join('');
};


