export const sortByBits = (arr) => {
  arr.forEach((cur, index) => {
    let nextNumber = Math.abs(cur);
    let binaryFormat = cur >= 0 ? [] : [1];

    while (nextNumber > 0) {
      if (nextNumber % 2 === 1) {
        binaryFormat.push(1);
      }
      nextNumber = Math.floor(nextNumber / 2);
    }
    arr[index] = {value: cur, length: binaryFormat.length};
  });
  arr.sort((a, b) => a.length - b.length || a.value - b.value)
      .forEach((cur, index) => arr[index] = cur.value);
  return arr;
};

