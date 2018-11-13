/* eslint-disable-next-line */
export function validate_bet (range, sms) {
  sms = sms.replace(/[,]/g, ' ');
  let regex = /[.;:-|[\]/]/g;
  if (sms.match(regex)) return 'None';
  let N = range[0];
  let M = range[1];
  let arr = sms.split(' ');
  arr = arr.filter((a) => {
    return Number(a);
  }).map((a) => {
    return Number(a);
  }).sort((a, b) => a - b);
  for (let i = 0; i < M; i++) {
    if (arr[i] > M) {
      return 'None';
    }
  }
  const leng = arr.length;
  if (leng < N) return 'None';
  return arr;
}
