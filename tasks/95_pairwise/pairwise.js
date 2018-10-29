export function pairwise(arr, target) {
//   const map = {};
//   const result = [];
// //   const length = arr.length;

  // //   for (let i = 0; i < length; i++) {
  // //     const item = arr[i];

  // //     if (typeof map[item] !== 'undefined') {
  // //       Array.prototype.push.call(result, map[indexOf(item)], indexOf(item));
  // //       break;
  // //     }

  // //     map[base - item] = item;
  // //   }
  // const result = arr.filter(a, b => a + b = num);

  //   return result;

  let results = [];
  for (let i=0; i<arr.length; i++) {
    for (let j=i+1; j<arr.length; j++) {
      if (arr[j] === target - arr[i]) {
        results.push([i, j]);
      }
    }
  }
  return results;
}


