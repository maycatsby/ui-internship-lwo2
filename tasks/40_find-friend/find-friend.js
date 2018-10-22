export function findFriend(arr) {
  const r = 'red';
  const b = 'blue';
  const arrLength = arr.length;
  let friendCounter = 0;
  for (let i = 0; i < arrLength; i++) {
    if (i >= arrLength - 2) return friendCounter;
    if (arr[i] == r && arr[i + 1] == b && arr[i + 2] == b) {
      friendCounter++;
      arr[i] = '_';
    }
    if (arr[i] == b && arr[i + 1] == r && arr[i + 2] == b) {
      friendCounter++;
      arr[i + 1] = '_';
    }
    if (arr[i] == b && arr[i + 1] == b && arr[i + 2] == r) {
      friendCounter++;
      arr[i + 2]= '_';
    }
  }
}
