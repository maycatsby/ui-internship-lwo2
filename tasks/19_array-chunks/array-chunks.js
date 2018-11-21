export function arrayChunks(arr, size) {
  let group = [];
  let position = 0;
  while (position < arr.length) {
    group.push(arr.slice(position, position+=size));
  }
  return group;
}
