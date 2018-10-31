export function whatIsInAName(arr1, arr2) {
  const keys = Object.keys(arr2);

  return arr1.filter(function(obj) {
    return keys.every(function(key) {
      return obj.hasOwnProperty(key) && obj[key] === arr2[key];
    });
  });
}