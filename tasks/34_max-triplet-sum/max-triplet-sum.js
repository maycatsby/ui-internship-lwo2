/* eslint-disable */
export function maxTripletSum(arr) {
  let newArr = [...new Set(arr)];//returns unique elems
  let sorted = newArr.sort( function(a, b) {
    return b-a;
  });
  let sum;
  let leng = sorted.length;
  sum=sorted[0]+sorted[1]+sorted[2];
  return sum;
}
