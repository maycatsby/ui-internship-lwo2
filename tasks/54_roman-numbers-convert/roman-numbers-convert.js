export function convertToRoman(num) {
  const romNumerals = [['M', 1000], ['CM', 900], ['D', 500],
    ['CD', 400], ['C', 100], ['XC', 90], ['L', 50], ['XL', 40],
    ['X', 10], ['IX', 9], ['V', 5], ['IV', 4], ['I', 1]];
  let runningTotal = 0;
  let roman = '';
  for (let i = 0; i < romNumerals.length; i++) {
    while (runningTotal + romNumerals[i][1] <= num) {
      runningTotal += romNumerals[i][1];
      roman += romNumerals[i][0];
    }
  }
  return roman;
}
