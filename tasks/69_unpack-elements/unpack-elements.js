export function unpackArray(arr) {
  const newArray = [];

  function unpack(arr) {
    arr.forEach(function(item) {
      if (!Array.isArray(item)) {
        newArray.push(item);
      } else {
        unpack(item);
      }
    });
  }
  unpack(arr);

  return newArray;
}
