// // export function unpackArray(arr) {
// //   let array = [];
// //   for (let i = arr.length; i>0; i--) {
// //     let value = arr.shift();
// //     if (Array.isArray(value)) {
// //       arr = value.concat(arr);
// //     } else {
export function unpackArray(arr) {
  const array = [];
  while (arr.length) {
    let value = arr.shift();
    if (Array.isArray(value)) {
      arr = value.concat(arr);
    } else {
      array.push(value);
    }
  }
  return array;
}
