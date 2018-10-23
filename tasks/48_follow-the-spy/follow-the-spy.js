export function followTheSpy(arr) {
  const leng = arr.length;
  const final = [arr[0][0], arr[0][1]];
  for (let i = 1; i < leng; i++) {
    for (let j = 0; j < leng; j++) {
      if (arr[j][0] === final[i]) {
        final.push(arr[j][1]);
      }
    }
  }
  return final.join(', ');
}
