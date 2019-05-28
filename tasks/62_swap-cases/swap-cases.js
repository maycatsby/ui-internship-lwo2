export const swapCases = (str) => {
  let markUpper = str.replace(/[A-Z]/g, (char) => `+${char}`);
  let toUpper = markUpper.replace(/[a-z]/g, (char) => char.toUpperCase());
  return toUpper.replace(/\+[A-Z]/g, (char) => char.toLowerCase())
      .replace(/\+/g, '');
};

