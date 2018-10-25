export function sumAll(arr) {
//   const sortedArr = arr.sort(function(a, b) {
// return a+ b
// ;}).reduce

//   return arr.reduce(arr[0], arr[1]);
  // return newArr;
//   return sumFrom(Math.min(...arr), Math.max(...arr));

 
    // var min = Math.min.apply(null, arr);
    // var max = Math.max.apply(null, arr);
  
    // return Array.apply(null, Array(max-min+1))   // get array of correct size
    //     .map(function(_, b) { return b+min; })   // change it to have correct values
    //     .reduce(function(a, b) { return a+b; }); // and sum it
        return arr
        .sort((a, b) => a - b)
        .reduce((a, b) => (a + b) * (b - a + 1) / 2);
}
