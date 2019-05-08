export const convertToRoman = (num) => {
  const arrOfNum = num.toString().split('').reverse()
      .map((cur) => parseInt(cur));
  let rom1 = ['I', 'X', 'C', 'M'];
  let rom5 = ['V', 'L', 'D'];
  let romanianNum = [];

  for (let i = 0; i < arrOfNum.length; i++) {
    let roman;
    let cur = arrOfNum[i];
    switch (cur) {
      case 0:
        roman = ''; break;
      case 1:
      case 2:
      case 3:
        roman = rom1[i].repeat(cur); break;
      case 4:
        roman = `${rom1[i]}${rom5[i]}`; break;
      case 5:
      case 6:
      case 7:
      case 8:
        roman = `${rom5[i]}${rom1[i].repeat(cur - 5)}`; break;
      case 9:
        roman = `${rom1[i]}${rom1[i + 1]}`; break;
    }
    romanianNum.unshift(roman);
  }
  return romanianNum.join('');
};

