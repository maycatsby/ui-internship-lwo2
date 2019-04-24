export const humanizeFormat = (number) => {
  let humanizedNumber;
  let lastElement = number > 0 ? parseInt(number.toString().slice(-1)) : '';

  if (lastElement === 0 || lastElement >= 4 ) {
    humanizedNumber = `${number.toString()}th`;
  } else if (lastElement === 1) {
    humanizedNumber = `${number.toString()}st`;
  } else if (lastElement === 2) {
    humanizedNumber = `${number.toString()}nd`;
  } else if (lastElement === 3) {
    humanizedNumber = `${number.toString()}rd`;
  } else {
    humanizedNumber = '';
  }
  return humanizedNumber;
};
