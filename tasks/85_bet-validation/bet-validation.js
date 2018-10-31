/* eslint-disable-next-line */
export function validate_bet(arr, str) {
  let temp = [];

  try {
    temp = str.split(/[\s,]+/).map(Number);
  } catch (e) {
    return 'None';
  }
  if (temp.length === arr[0] && Math.max(...temp) <= arr[1]) {
    return temp.sort();
  } else {
    return 'None';
  }
}
