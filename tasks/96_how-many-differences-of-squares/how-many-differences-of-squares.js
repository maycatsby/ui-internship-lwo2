export function squares(num) {
  const arr = sqDifArr(num);
  return arr[num];
}

function sqDifArr(n) {
  const templateArr = [];
  let prevItem = 0;
  templateArr.push(0);
  for (let i = 1; i <= n; i++) {
    if (isSqDiff(i)) {
      prevItem ++;
    }
    templateArr.push(prevItem);
  }
  return templateArr;
}

function isSqDiff(num) {
  return num % 2 === 1 || num % 4 === 0;
}


