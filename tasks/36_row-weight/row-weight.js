export function rowWeights(arr) {
  let leng = arr.length;
  let team1 = [];
  let team2 = [];
  for (let i=0; i<leng; ++i) {
    if (i%2 !== 0) {
      team2.push(arr[i]);
    } else {
      team1.push(arr[i]);
    }
  }
  const final = [];
  if (arr.length !== 1) {
    let num1 = team1.reduce(function(sum, current) {
      return sum + current;
    });
    let num2 = team2.reduce(function(sum, current) {
      return sum + current;
    });
    final.push(num1, num2);
  } else {
    final.push(arr[0], 0);
  }
  return final;
}
