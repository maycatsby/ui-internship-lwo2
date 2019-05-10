export const validBraces = (str) => {
  const bracesOpen = ['(', '[', '{'];
  const bracesClose = [')', ']', '}'];
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    let cur = str.charAt(i);
    let lastEl = stack[stack.length - 1];
    if (bracesOpen.indexOf(cur) !== -1) {
      stack.push(cur);
    } else if (bracesClose.indexOf(cur) === bracesOpen.indexOf(lastEl)) {
      stack.splice(-1);
    } else {
      return false;
    }
  }
  return (!stack.length) ? true : false;
};

