export function findFriend(arr) {
  const friend = 'red';
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    let elem = arr[i];
    if (elem === friend) {
      if (arr[i - 1] === 'blue' && arr[i + 1] === 'blue') {
        num += 1;
      } else if (arr[i + 1] === 'blue' && arr[i + 2] === 'blue') {
        num += 1;
      } else if (arr[i - 1] === 'blue' && arr[i - 2] === 'blue') {
        num += 1;
      }
    }
  }
  return num;
}
