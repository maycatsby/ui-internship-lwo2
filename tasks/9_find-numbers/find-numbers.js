export function getNumbers(str) {
  let digArray = str.match(/\d+/g);
  let resArray = [];
  for (let i = 0; i < digArray.length; i++) {
    resArray.push(+digArray[i]);
  }
  return resArray;
}
