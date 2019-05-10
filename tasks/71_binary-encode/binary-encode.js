export const binaryEncode = (str) => {
  if (!str) {
    return '';
  }
  let binStr = [];
  for (let i = 0; i < str.length; i++) {
    let toBin = str.charCodeAt(i).toString(2);
    let zerosRepeats = 8 - toBin.length;

    let fullBin = (zerosRepeats) ? `${'0'.repeat(zerosRepeats)}${toBin}`: toBin;
    binStr.push(fullBin);
  }
  return binStr.join(' ');
};
