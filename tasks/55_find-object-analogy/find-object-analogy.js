export function whatIsInAName(arr, obj) {
  const objectsArr = arr.slice();
  const boolArr = [];
  return objectsArr.filter((value, index, array) =>{
    let boolPush = 1;
    Object.keys(obj).map((internalValue, index, array) => {
      boolPush *= value.hasOwnProperty(internalValue) && obj[
          internalValue] == value[internalValue];
    });
    boolArr.push(!!boolPush);
    return boolArr[index];
  });
}
