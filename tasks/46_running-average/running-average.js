// export function runningAverage() {
//     return function(num) {
//       return ( + num) / 2;
//     };
//   }

  export function runningAverage(value) {
       let n = 0;
       return function(n) {
           n++;
           return value / n;
  }
}