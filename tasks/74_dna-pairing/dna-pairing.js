export function pairElement(str) {
  const DNA = {
    'A': 'T',
    'T': 'A',
    'C': 'G',
    'G': 'C',
  };
  let outputArray = [];
  for (let i = 0; i < str.length; i++) {
    outputArray.push([str[i], DNA[str[i]]]);
  }
  return outputArray;
}
