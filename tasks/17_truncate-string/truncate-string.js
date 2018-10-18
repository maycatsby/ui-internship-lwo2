export function truncateString(str, length) {
  if (length <= 3) {
    return str.slice(0, length) + '...';
  } else if (str.length - length < 3) {
    return str;
  } else {
    return str.slice(0, length - 3) + '...';
  }
}
