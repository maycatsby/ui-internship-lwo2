export const arrayPlusArray = (arr1, arr2) => {
  const newArray = [];
  for (let i = 0; i < Math.max(arr1.length, arr2.length); i++) {
    let sum = (arr1[i] || 0) + (arr2[i] || 0);
    newArray.push(sum);
  }
  return newArray;
};
