export const reverseStringInRange = (str, indexArr) => {
  if (str === '') {
    return '';
  }
  let middleEl = str.substring(indexArr[0], indexArr[1] + 1);
  let reverseEl = middleEl
      .split('')
      .reverse()
      .join('');
  return str.replace(middleEl, reverseEl);
};
