export function convertToRoman(num) {
  const romanArr = [{
    0: '', 1: 'I', 2: 'II', 3: 'III', 4: 'IV', 5: 'V',
    6: 'VI', 7: 'VII', 8: 'VIII', 9: 'IX',
  },
  {
    0: '', 1: 'X', 2: 'XX', 3: 'XXX', 4: 'XL', 5: 'L',
    6: 'LX', 7: 'LXX', 8: 'LXXX', 9: 'XC',
  },
  {
    0: '', 1: 'C', 2: 'CC', 3: 'CCC', 4: 'CD',
    5: 'D', 6: 'DC', 7: 'DCC', 8: 'DCCC',
  }];
  const str = num.toString();
  const strLength = str.length;
  let resultStr = '';
  for (let i = strLength; i >= 1; i--) {
    resultStr += romanArr[i - 1][+str.charAt(strLength - i)];
  }
  return resultStr;
}
