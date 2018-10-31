export function bouncingBall(h, b, w) {
  let i = 0;
  while ( h > w) {
    h *= b;
    i +=2;
  }

  return i - 1;
}
