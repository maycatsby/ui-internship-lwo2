export const findCloseIndex = (str, num) => {
  let openBrackets = 0;
  let closeBrackets = 0;
  let index;
  if (str.charAt(num) === '(') {
    for (let i = num + 1; i < str.length; i++) {
      let char = str.charAt(i);
      switch (char) {
        case '(':
          openBrackets++; break;
        case ')':
          closeBrackets++; break;
      }
      if (closeBrackets > openBrackets) {
        return index = i;
      }
    }
  } else {
    index = -1;
  }
  return index;
};


