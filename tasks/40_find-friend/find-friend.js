export const findFriend = (arr) => {
  let redAmount = 0;

  for (let i = 0; i < arr.length; i++) {
    let prevElBlue = arr[i - 1] == 'blue';
    let nextElBlue = arr[i + 1] == 'blue';

    if (arr[i] !== 'red') {
      continue;
    } else if ((prevElBlue && nextElBlue) ||
         (nextElBlue && arr[i + 2] == 'blue') ||
         (prevElBlue && arr[i - 2] == 'blue')) {
      redAmount++;
    }
  }
  return redAmount;
};


