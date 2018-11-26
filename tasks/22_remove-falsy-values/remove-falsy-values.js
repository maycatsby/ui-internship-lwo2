export function removeFalsyValues(str) {
  let result = str.filter((elems)=> !!elems);
  return result;
}
