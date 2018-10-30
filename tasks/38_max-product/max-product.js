export function maxProduct(arr) {
  let prodArray = arr.map((value, index) => {
    return value * arr.slice(index + 1, index + 2);
  });
  prodArray.pop();
  return Math.max.apply(null, prodArray);
}
