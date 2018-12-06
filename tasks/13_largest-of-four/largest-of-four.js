export function largestOfFour(theArgs) {
  let maxArray = [];
  theArgs.forEach((element) => {
    let maxValue = -Infinity;
    element.forEach((element2) => {
      if (element2 > maxValue) {
        maxValue = element2;
      }
    });
    maxArray.push(maxValue);
  });
  return maxArray;
}
