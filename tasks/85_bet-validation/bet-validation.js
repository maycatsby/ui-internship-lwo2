export function validateBet(arr, str) {
  const spacedStr = str.replace(/,/g, ' ');
  const betArr = spacedStr.match(/^\d|[\s,][\d]{1,}/g);
  let targetArr = betArr.filter((el) => {
    return el <= arr[1];
  });
  if (str.search(/[^\s\d,]/) !== -1) return 'None';
  targetArr = targetArr.map((el) =>{
    return +el;
  });
  const sortedArr = targetArr.sort((a, b) => {
    return a - b;
  });
  if (targetArr.length === arr[0]) {
    return sortedArr;
  } else {
    return 'None';
  }
}
