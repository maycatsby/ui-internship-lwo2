/* eslint-disable */

export function getAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    let avg = sum / arr.length;
    return Math.floor(avg);
}