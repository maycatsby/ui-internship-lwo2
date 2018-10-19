
export function maxTripletSum(arr) {
  /* eslint-disable-next-line */
  let newArr = [...new Set(arr)];//returns unique elems
  let sorted = newArr.sort( function(a, b) {
    return b-a;
  });
  let sum;
  sum=sorted[0]+sorted[1]+sorted[2];
  return sum;
}
