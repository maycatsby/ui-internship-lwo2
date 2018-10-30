export function maxTripletSum(arr) {
  const targetArr = arr.filter(function(element, position) {
    return arr.indexOf(element) == position;
  }).sort();
  return targetArr.slice(-3).reduce((a, b) => a + b);
}
