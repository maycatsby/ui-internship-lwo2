export function translatePigLatin(str) {
  const vowelArr = ['a', 'e', 'i', 'o', 'u'];
  const arr = str.split('');
  if (vowelArr.indexOf(str.slice(0, 1)) !== -1) return str + 'way';
  let firstVowelIndex = Infinity;
  vowelArr.forEach((element) => {
    if (arr.indexOf(element) !== -1 && arr.indexOf(element) < firstVowelIndex) {
      firstVowelIndex = arr.indexOf(element);
    }
  });
  const insertValue = arr.splice(0, firstVowelIndex).join('');
  return arr.join('') + insertValue + 'ay';
}
