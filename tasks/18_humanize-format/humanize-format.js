
export function humanizeFormat(num) {
  let final = '';
  if (num) {
    let str = num.toString();
    let strLen = str.length-1;
    if (str[strLen]==1) {
      return str+'st';
    }
    if (str[strLen] == 2) {
      return str+'nd';
    }
    if (str[strLen] == 3) {
      return str+'rd';
    }
    if (str[strLen] >= 4) {
      return str+'th';
    } else {
      return final;
    }
  } else {
    return final;
  }
}


