export function sortByBits(arr) {
  let newArr=[];
  let tempArray=[];
  arr.forEach(function(elem) {
    newArr.push(elem.toString(2).split('').map(Number).reduce((a, b)=>a+b, 0));
  });
  newArr.forEach(function(elem, index) {
    tempArray[index] = [arr[index], newArr[index]];
  });
  tempArray.sort(function(a, b) {
    if (a[1]==b[1]) {
      return a[0]-b[0];
    } else {
      return a[1]-b[1];
    }
  });
  newArr=[];
  tempArray.forEach(function(elem) {
    newArr.push(elem[0]);
  });
  return newArr;
}

