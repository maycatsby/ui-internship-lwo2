export function arrayLeaders(arr) {
  arr.push(0, 0);
  const leaders = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1] + arr[i + 2]) {
      leaders.push(arr[i]);
    }
  }
  return leaders;
}

