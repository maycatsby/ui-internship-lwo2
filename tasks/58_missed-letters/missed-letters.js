export const findLetter = (str) => {
  const arrStr = str.split('');
  for (let i = 0; i < arrStr.length - 1; i++) {
    let nextEl = arrStr[i].charCodeAt() + 1;
    if (nextEl !== arrStr[i + 1].charCodeAt()) {
      return String.fromCharCode(nextEl);
    }
  }
  return undefined;
};

