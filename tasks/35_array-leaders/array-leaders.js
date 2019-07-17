export const arrayLeaders = (arr) => {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    const elToRight = arr.slice(i + 1);
    let sumToRight;
    if (elToRight.length > 1) {
      sumToRight = elToRight.reduce((prev, cur) => {
        return prev + cur;
      });
    } else if (elToRight.length === 1) {
      sumToRight = arr[i + 1];
    } else {
      sumToRight = 0;
    }
    if (arr[i] > sumToRight) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
};


