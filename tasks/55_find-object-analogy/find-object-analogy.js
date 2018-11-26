export function whatIsInAName(objArr, value) {
  let arr = [];
  const keys = Object.keys(value);
  arr = objArr.filter(function(obj) {
    return keys.every(function(key) {
      return obj.hasOwnProperty(key) && obj[key] === value[key];
    });
  });
  return arr;
}
