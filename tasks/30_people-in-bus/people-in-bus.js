export const peopleInBus = (arr) => {
  let peopleAmount = 0;
  for (let i = 0; i < arr.length; i++) {
    peopleAmount += arr[i][0] - arr[i][1];
  }
  return peopleAmount;
};
