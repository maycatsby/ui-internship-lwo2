export function DNAStrand(str) {
  const pairs = {
    'A': 'T',
    'T': 'A',
    'C': 'G',
    'G': 'C',
  };
  const targetArr = str.split('');
  let resultStr = '';
  targetArr.forEach((value) => {
    if (pairs.hasOwnProperty(value)) resultStr += pairs[value];
  });
  return resultStr;
}
