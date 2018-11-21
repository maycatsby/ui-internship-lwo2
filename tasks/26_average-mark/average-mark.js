export function getAverage(marks) {
  return Math.floor(marks.reduce((res, x)=> res+x)/marks.length);
}
