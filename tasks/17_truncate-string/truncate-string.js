
export const STRING0 = 'A-tisket a-tasket A green and yellow basket';
export const STRING1 = 'Peter Piper picked a peck of pickled peppers';

export function truncateString(str, leng) {
  if (str.length > leng) {
    return str.slice(0, leng > 3 ? leng-3 : leng)+'...';
  } else {
    return str;
  }
}

