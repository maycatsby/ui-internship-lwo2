export function peopleInBus(arr) {
  return arr.reduce((accumulator, currentValue) => {
    accumulator += currentValue[0];
    accumulator -= currentValue[1];
    return accumulator;
  }, 0);
}
