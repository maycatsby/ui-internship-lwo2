
export function confirmEnding(str, target) {
  let nstr=str.split(' ');
  /* eslint-disable-next-line */
  if (nstr[nstr.length-1] === target || target === str.substring(Number(str.length-1), Number(str.length)) || str.slice(-target.length)=== target) {
    return true;
  } else {
    return false;
  }
}
