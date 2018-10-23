export function maxProduct(arr) {
  const arr1 = [];
  for (let i = 0; i <= arr.length - 2; i++) {
    const rez = arr[i]*arr[i+1];
    arr1.push(rez);
  }
  const sortArr = arr1.sort(function(a, b) {
    return a - b;
  });
  let y = sortArr.reverse().slice(0, 1);
  return Number(y);
}

