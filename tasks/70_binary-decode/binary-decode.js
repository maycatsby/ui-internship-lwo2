export const binaryDecode = (str) => {
  if (str) {
    return str.split(' ')
        .map((cur) => String.fromCharCode(parseInt(cur, 2)))
        .join('');
  } else {
    return '';
  }
};


