export function removeDuplicates(arr) {
  return arr = arr.filter(function(element, position) {
    return arr.indexOf(element) == position;
  });
}
