export const reverseStringInRange = (str, indexArr) => {
  if (str === '') {
    return '';
  }
  let indBeg = indexArr[0];
  let indEnd = indexArr[1] + 1;
  let middleEl = str.substring(indBeg, indEnd);
  let reverseEl = middleEl
      .split('')
      .reverse()
      .join('');
  return `${str.substring(0, indBeg)}${reverseEl}${str.substring(indEnd)}`;
};
