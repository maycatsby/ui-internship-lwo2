export function arrayChunks(arr, size) {
  let res= [];
  while (arr.length) {
    res.push(arr.splice(0, size));
  }
  return res;
}
