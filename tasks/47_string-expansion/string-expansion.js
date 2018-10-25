export function stringExpansion(str) {
  let res = '';
  let number = 1;
  let strArr = str.split('').map((el) => {
    let num = Number(el);
    return num === 0 ? num : num || el;
  });
  for (let i = 0; i < strArr.length; i++) {
    if (typeof strArr[i] === 'number') {
      number = strArr[i];
    } else {
      res += strArr[i].repeat(number);
    }
  }
  return res;
}
