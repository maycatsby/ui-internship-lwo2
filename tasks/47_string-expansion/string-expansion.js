export function stringExpansion(str) {
  const arrLength = str.length;
  let targetArray = str.split('');
  let resultArray = [];
  if (str.search(/[0-9]/)) return str;
  targetArray.map((value, index, number, array) => {
    if (value.match(/[0-9]/) && targetArray[index + 1].match(/[A-Za-z]/)) {
      let pushString = '';
      let concatcount = value;
      for (let i = index + 1; i < arrLength; i++) {
        if (targetArray[i].match(/[0-9]/)) break;
        if (targetArray[i].match(/[A-Za-z]/)) {
          while (concatcount) {
            pushString += targetArray[i];
            concatcount--;
          }
          concatcount = value;
        }
      }
      resultArray.push(pushString);
    }
  });
  return resultArray.join('');
}
