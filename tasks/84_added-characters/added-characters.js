export function addedChar(str, str2) {
  const comparationArr = str.split('');
  const resultArr = str2.split('').slice();
  comparationArr.forEach( (element) => {
    if (resultArr.indexOf(element) !== -1) {
      resultArr.splice(resultArr.indexOf(element), 1);
    }
  });
  return resultArr[0];
}

