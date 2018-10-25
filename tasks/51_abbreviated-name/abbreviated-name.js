export function abbreviated(name) {
  let splitName = name.split(' ');
  for (let i = 1; i < splitName.length; i++) {
    splitName[i] = splitName[i].charAt(0) + '.';
  }
  return splitName.join(' ');
}
