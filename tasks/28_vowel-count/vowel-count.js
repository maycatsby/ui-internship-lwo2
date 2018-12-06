export function getVowelCount(str) {
  const targetArr = str.toLowerCase().split('');
  const vowelArr = ['a', 'e', 'i', 'o', 'u'];
  return targetArr.filter((value, index) => {
    return (vowelArr.indexOf(value) !== -1);
  }).length;
}

