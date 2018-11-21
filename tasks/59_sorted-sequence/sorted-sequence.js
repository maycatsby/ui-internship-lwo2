export function uniteUnique() {
/* eslint-disable-next-line */
  return [].concat.apply([], arguments).filter(function(elem, index, self) {
    return self.indexOf(elem) === index;
  });
}
