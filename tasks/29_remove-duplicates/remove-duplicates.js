export function removeDuplicates(arr) {
  let uniqueArray = arr.filter(function(elem, index, self) {
    return index == self.indexOf(elem);
  });
  return uniqueArray;
}
