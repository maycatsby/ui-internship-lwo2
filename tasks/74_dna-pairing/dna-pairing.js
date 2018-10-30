export function pairElement(str) {
  const pairs = {
    'A': 'T',
    'T': 'A',
    'C': 'G',
    'G': 'C',
  };
  const targetArr = str.split('');
  const resultArr = [];
  targetArr.forEach((value) => {
    if (pairs.hasOwnProperty(value)) {
      let pushArray = [];
      pushArray.push(value, pairs[value]);
      resultArr.push(pushArray);
    }
  });
  return resultArr;
}
