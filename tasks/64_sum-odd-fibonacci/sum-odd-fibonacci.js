export function sumFibs(n) {
  let fiboArr = [1, 1];
  for (let i = 2; i < n; i++) {
    if ((fiboArr[i-1] + fiboArr[i-2]) > n) break;
    fiboArr[i] = fiboArr[i-1] + fiboArr[i-2];
  }
  fiboArr = fiboArr.filter((el) => el % 2 !== 0);
  return fiboArr.reduce((res, item) => res + item);
}
