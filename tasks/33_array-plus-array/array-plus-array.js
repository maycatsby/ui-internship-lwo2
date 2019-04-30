export const arrayPlusArray = (arr1, arr2) => {
  const newArray = [];
  const longerArr = arr1.length > arr2.length ? arr1 : arr2;
  for (let i = 0; i < longerArr.length; i++) {
    let sum = (arr1[i] || 0) + (arr2[i] || 0);
    newArray.push(sum);
  }
  return newArray;
};
