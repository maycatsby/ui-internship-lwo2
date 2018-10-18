export function arrayChunks(arr, chunkLength) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += chunkLength) {
    newArr.push(arr.slice( i, chunkLength + i));
  }
  return newArr;
}
