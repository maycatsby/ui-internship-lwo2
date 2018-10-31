/* eslint "require-jsdoc": 0 */

export function largestOfFour(mainArray) {
  return mainArray.map(function(subArray) {
    return subArray.reduce(function(previousLargestNumber,
        currentLargestNumber) {
      return (currentLargestNumber > previousLargestNumber) ?
      currentLargestNumber : previousLargestNumber;
    }, 0);
  });
}

