export function convertToRoman(num) {
  let decimalValue = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
  const decLeng = decimalValue.length;
  /* eslint max-len: ["error", { "code": 100 }]*/
  let romanNumeral = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'];
  let numCopy = num;
  let romanized = '';
  while (numCopy > 0) {
    for (let i = 0; i < decLeng; i++) {
      if (+decimalValue[i] <= numCopy && +decimalValue[+i + 1] > numCopy) {
        romanized += romanNumeral[i];
        numCopy -= decimalValue[i];
      }
    }
  }
  return romanized;
}
