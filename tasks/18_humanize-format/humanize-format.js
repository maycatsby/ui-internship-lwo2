export function humanizeFormat(number) {
  if (typeof(number) == 'undefined') return '';
  number = number.toString();
  let ending = 'th';
  if (number.slice(-1) == 1) {
    ending = 'st';
  }
  if (number.slice(-1) == 2) {
    ending = 'nd';
  }
  if (number.slice(-1) == 3) {
    ending = 'rd';
  }
  let rez = number + ending;
  return rez;
}
