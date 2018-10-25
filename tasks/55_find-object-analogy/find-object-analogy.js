export function whatIsInAName(collection, source) {
  let array = [];
  let keys = Object.keys(source);
  array = collection.filter(function(obj) {
    return keys.every(function(key) {
      return obj.hasOwnProperty(key) && obj[key] === source[key];
    });
  });
  return array;
}

