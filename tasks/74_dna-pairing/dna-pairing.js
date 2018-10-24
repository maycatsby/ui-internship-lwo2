export function pairElement(str) {
  let pair = [];
  let char = str.split('');
  const charLen = char.length;
  for (let i = 0; i < charLen; i++) {
    switch (char[i]) {
      case 'A':
        pair.push(['A', 'T']);
        break;
      case 'T':
        pair.push(['T', 'A']);
        break;
      case 'C':
        pair.push(['C', 'G']);
        break;
      case 'G':
        pair.push(['G', 'C']);
        break;
    }
  }
  return pair;
}
