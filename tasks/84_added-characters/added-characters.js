export function addedChar(str1, str2) {
  str1.split('').forEach(function(element) {
    let ind = str2.indexOf(element);
    if (ind != -1) {
      str2 = str2.slice(0, ind) + str2.slice(ind+1);
    }
  });
  if (str2.length > 3) {
    let counts = {};
    str2.split('').forEach(function(x) {
      counts[x] = (counts[x] || 0)+1;
    });
    let maxCount = Math.max(...Object.values(counts));
    return Object.keys(counts).find((key) => counts[key] === maxCount);
  }

  return str2[0];
}
