export function firstNSmallest(arr, item) {
  if (item === 0) arr = [];
  while (arr.length > item) {
    for (let i = arr.length -1; i < arr.length - 1; --i) {
      arr.splice(arr.indexOf((Math.max(...arr))), 1);
      console.log(arr.length);
    }
  }
  return arr;
}
