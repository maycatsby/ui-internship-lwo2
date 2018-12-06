export function uniteUnique(...args) {
  let unique = [];
  args.map((element, index, array) => {
    unique = unique.concat(element);
  });
  return unique.filter((element, index, array) => {
    return unique.indexOf(element) === index;
  });
}
