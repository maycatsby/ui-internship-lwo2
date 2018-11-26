export function binaryEncode(str) {
  if (!str) return '';
  const pattern = '00000000';
  return str.replace(/[\s\S]/g, (char) => {
    const binaryStr = char.charCodeAt().toString(2);
    const l = binaryStr.length;
    let formatedPattern = pattern.slice(l);
    return formatedPattern + binaryStr + ' ';
  }).trim();
}
