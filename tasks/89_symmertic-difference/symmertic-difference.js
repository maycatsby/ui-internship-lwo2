/* eslint-disable */ 
function symDiff(a, b) {
  const r = [];
  a = [...new Set(a.sort())];

  b = [...new Set(b.sort())];
  a.forEach(function(element) {
    if ( b.indexOf(element) === -1) {
      r.push(element);
    } else {
      b.splice(b.indexOf(element), 1);
    }
  });
  return r.concat(b);
}
export function sym() {
  let i;
  let result = symDiff(arguments[0], arguments[1]);
  for (i = 2; i< arguments.length; i++) {
    result = symDiff(result, arguments[i]);
  }
  return [...new Set(result.sort())];
}

