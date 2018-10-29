export function sym(...arrays) {
  const allItems = arrays.reduce((a, c)=>a.concat(c), []);
  // Identify repeated items
  const repeatedItems = allItems.filter((v, i, a)=>a.indexOf(v) !== i);
  // Filter repeated items out
  const diff = allItems.filter((item)=>repeatedItems.indexOf(item) < 0);
  return diff;
}
