// eslint-disable-next-line camelcase
export const validate_bet = (arrRange, ...num) => {
  const str = typeof num[0] === 'number' ? num.join(',') : num[0];
  const pattern = /[^0-9|\s|,]/;
  if (pattern.test(str)) {
    return 'None';
  }
  let arrStr = str.split(/\s|,/)
      .filter((cur) => cur !== '').sort();
  if ([...new Set(arrStr)].length !== arrRange[0]) {
    return 'None';
  }
  const isOutOfRange = (el) => {
    return el < 0 || el >= arrRange[1];
  };
  if (arrStr.some(isOutOfRange)) {
    return 'None';
  }
  return arrStr;
};
