export const truncateString = (str, maxLength) => {
  let truncatedString;
  let stringLengthComparison = str.length > maxLength;

  if (stringLengthComparison && maxLength > 3) {
    truncatedString = `${str.slice(0, maxLength - 3)}...`;
  } else if (stringLengthComparison) {
    truncatedString = `${str.slice(0, maxLength)}...`;
  } else {
    truncatedString = str;
  }

  return truncatedString;
};
