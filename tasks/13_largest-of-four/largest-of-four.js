export const largestOfFour = (arr) => {
  return arr.map( (cur) => {
    let maxValue = cur[0];
    for (let i = 0; i < arr.length; i++) {
      if (cur[i] > maxValue) maxValue = cur[i];
    }
    return maxValue;
  });
};


