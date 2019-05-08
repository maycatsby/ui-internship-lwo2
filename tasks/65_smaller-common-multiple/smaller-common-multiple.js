export const smallestCommons = (arr) => {
  const arrSort = arr.sort((a, b) => a - b);
  for (let i = 1; ; i++ ) {
    let number = arrSort[1] * i;
    let isDivided = 1;
    for (let i = arrSort[0]; i < arrSort[1]; i++) {
      if (number % i !== 0) {
        isDivided = 0; break;
      }
    }
    if (isDivided) {
      return number;
    }
  }
};
