export function squares(n) {
  const failed = [];
  const arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }
  for (let i = 2; i <= n; i+=4) {
    failed.push(i);
  }
  const arrLeng = arr.length;
  const failLeng = failed.length;

  return arrLeng - failLeng;
}
