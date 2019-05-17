export const humanizeFormat = (number) => {
  let humanizedNumber;
  let lastElement = number > 0 ? parseInt(number.toString().slice(-1)) : '';

  switch (lastElement) {
    case 1:
      humanizedNumber = `${number.toString()}st`; break;
    case 2:
      humanizedNumber = `${number.toString()}nd`; break;
    case 3:
      humanizedNumber = `${number.toString()}rd`; break;
    case '':
      humanizedNumber = ''; break;
    default:
      humanizedNumber = `${number.toString()}th`; break;
  }
  return humanizedNumber;
};

