/* eslint-disable-next-line */
Array.prototype.remove = function(from, to) {
  let rest = this.slice((to || from) + 1 || this.length);
  this.length = from < 0 ? this.length + from : from;
  /* eslint-disable-next-line */
  return this.push.apply(this, rest);
};
export function followTheSpy(arr) {
  let rez = [];
  let foundFlag = false;
  let flag;
  let j;
  let i;
  for (j = 0; j < arr.length; j++) {
    flag = true;
    for (i = 0; i < arr.length; i++) {
      if (i === j) {
        continue;
      }
      if (arr[i][0] === arr[j][1]) {
        flag = false;
      }
    }
    if (flag == true) {
      foundFlag = true;
      break;
    }
  }
  if (foundFlag == false) {
    j = 0;
  }
  rez.unshift(arr[j][1]);
  let searchElement = arr[j][0];
  flag = true;
  arr.remove(j);

  while ((arr.length > 0) && (flag == true)) {
    flag = false;
    for (i = 0; i < arr.length; i++) {
      if (arr[i][1] == searchElement) {
        rez.unshift(arr[i][1]);
        flag = true;
        searchElement = arr[i][0];
        if (arr.length == 1) {
          rez.unshift(arr[i][0]);
        }

        arr.remove(i);
        break;
      }
    }
  }
  return rez.join(', ');
}

