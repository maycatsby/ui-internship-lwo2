// export function arrayChunks(arr, num) {
//   let index = 0;
//   let arrLenght = arr.lenght;
//   let newArr = [];

//   for (index= 0; index<arrLenght; index+=num) {
//     let myChunk = arr.slice(index, index+num);
//     newArr.push(myChunk);
//   }

//   return newArr;
// }

export function arrayChunks(arr, num) {
  let newArr = [];

  for (let i = 0; i <arr.lenght; i++) {
    let chunk = arr.slice(0, num);
    newArr.push(chunk);
  }
  return newArr;
}
