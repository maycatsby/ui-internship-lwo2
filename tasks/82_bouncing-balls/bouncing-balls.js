export function bouncingBall(height, bounce, window) {
  let currentHeight = height;
  let bounceCount = 1;
  if (bounce >= 1 || bounce <= 0) return -1;
  while (currentHeight > window) {
    currentHeight *= bounce;
    bounceCount +=2;
  }
  return bounceCount - 2;
}
