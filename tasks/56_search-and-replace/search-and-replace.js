export function myReplace(str, before, after) {
  const arr = str.split('');
  let insert;
  const befLength = before.length;
  if (before.charAt(0).toUpperCase() === before.charAt(0)) {
    insert = (after.charAt(0).toUpperCase() + after.slice(1)).split('');
  } else {
    insert = after.split('');
  }
  arr.splice(str.indexOf(before), befLength, insert.join(''));
  return arr.join('');
}
