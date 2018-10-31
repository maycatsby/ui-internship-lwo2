export function fatFingers(str) {
  const indices = [];
  for (let i=0; i<str.length; i++) {
    if (str[i] === 'a' || str[i] === 'A') indices.push(i);
  }
  if ((indices.length % 2) != 0) {
    indices.push(str.length);
  }

  for (let i = 0; i< indices.length; i += 2) {
    for (let j = indices[i]; j < indices[i + 1]; j++) {
      str = str.substr(0, j) + str.charAt(j).toUpperCase() + str.substr(j + 1);
    }
  }

  for (let i = indices.length - 1; i > - 1; i--) {
    str = str.slice(0, indices[i]) + str.slice(indices[i] + 1);
  }

  return str;
}
