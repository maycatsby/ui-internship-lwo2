export function rowWeights(arr) {
  let row1 = 0;
  let row2 = 0;
  for ( let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if ( i % 2 === 0 ) {
      row1 += num;
    } else {
      row2 += num;
    }
  }
  return [row1, row2];
}

