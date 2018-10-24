export function removeDuplicates(duplicatesArray) {
  let uniqueArray = duplicatesArray.filter(function(elem, pos) {
    return duplicatesArray.indexOf(elem) == pos;
  });
  return uniqueArray;
}
