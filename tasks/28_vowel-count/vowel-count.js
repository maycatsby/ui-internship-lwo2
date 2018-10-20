export function getVowelCount(str) {
  let vowelList = 'aeiouAEIOU';
  let vcount = 0;

  for (let i = 0; i < str.length; i++) {
    if (vowelList.indexOf(str[i]) !== -1) {
      vcount += 1;
    }
  }
  return vcount;
}
