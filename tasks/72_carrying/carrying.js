/* eslint-disable */ // it doesn't let me use arguments
export function addTogether() {
  const isNumber = n => typeof n === 'number';
  const [first, second] = arguments;

  if (!isNumber(first)) return;

  if (isNumber(first) && isNumber(second)) {
    return first + second;
  }

  if (second && !isNumber(second)) return;

  return (b) => {
    if (isNumber(b)) return first + b;
  };
}