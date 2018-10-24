export function abbreviated(str) {
  return str.split(' ').map((value, index, array) => {
    if ( index == 0) return value;
    return value = value.slice(0, 1).toUpperCase() + '.';
  }
  ).join(' ');
}

