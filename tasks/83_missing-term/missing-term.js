export function findMissing(arr) {
  const step = (arr[arr.length - 1] - arr[0])/arr.length;
  for (let i=0; i < (arr.length - 2); i++) {
    if ( arr[i+1] !== (arr[i]+step)) {
      return arr[i]+step;
    }
  }
}
