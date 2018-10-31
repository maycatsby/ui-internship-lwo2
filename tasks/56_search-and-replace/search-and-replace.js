export function myReplace(str, before, after) {
  return str.replace(before, function(before) {
    if (before.charAt(0) === before.charAt(0).toUpperCase()) {
      return after.charAt(0).toUpperCase() + after.substr(1).toLowerCase();
    } else {
      return after.charAt(0).toLowerCase(0) + after.substr(1).toLowerCase();
    }
  });
}
