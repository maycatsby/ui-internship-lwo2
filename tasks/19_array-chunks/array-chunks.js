export const arrayChunks = (arr, size) => {
  let amountOfChucks = Math.ceil(arr.length / size);
  let arrayOfArray = [];
  for (let i = 0; i < amountOfChucks; i++) {
    let begin = i * size;
    let endOfArr = begin + size;
    let end = endOfArr <= arr.length ? endOfArr: arr.length;
    let subArray = arr.length > size ? arr.slice(begin, end) : arr.slice(begin);
    arrayOfArray.push(subArray);
  }
  return arrayOfArray;
};


