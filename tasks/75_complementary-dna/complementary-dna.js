export function DNAStrand(inputString) {
  const DNA = {
    'A': 'T',
    'T': 'A',
    'C': 'G',
    'G': 'C',
  };
  let outputStr = '';
  for (let i = 0; i < inputString.length; i++) {
    outputStr += DNA[inputString[i]];
  }
  return outputStr;
}
