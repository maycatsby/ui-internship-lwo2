export function deepClone(obj) {
  const clone = {};
  for (let i in obj) {
    if (obj[i] != null && typeof(obj)=='object') {
      clone[i] = deepClone(obj[i]);
    } else {
      clone[i] = obj[i];
    }
  }
  return clone;
}
