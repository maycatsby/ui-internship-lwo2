export const DNAStrand = (str) => {
  const dnaPair = [['A', 'T'], ['T', 'A'], ['C', 'G'], ['G', 'C']];
  const strArr = str.split('');
  return strArr.map((cur) => {
    for (let i = 0; i < dnaPair.length; i++) {
      if (cur === dnaPair[i][0]) {
        return dnaPair[i][1];
      }
    }
  }).join('');
};
