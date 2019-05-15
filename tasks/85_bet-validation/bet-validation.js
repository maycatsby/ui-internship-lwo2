// eslint-disable-next-line camelcase
export const validate_bet = (arrRange, str) => {
  let pattern = /[^0-9|\s|,]/;
  if (pattern.test(str)) {
    return 'None';
  }
  let arrStr = str.split(/\s|,/)
      .filter((cur) => cur !== '').sort();
  if ([...new Set(arrStr)].length !== arrRange[0]) {
    return 'None';
  }
  let isOutOfRange = arrStr.filter((cur) => {
    return cur < 0 || cur >= arrRange[1];
  }).length;
  if (isOutOfRange) {
    return 'None';
  }
  return arrStr;
};
