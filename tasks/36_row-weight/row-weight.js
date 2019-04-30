export const rowWeights = (arr) => {
  let team1 = [0];
  let team2 = [0];
  let arrOfWeight = [team1, team2];

  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      team1.push(arr[i]);
    } else {
      team2.push(arr[i]);
    }
  }

  return arrOfWeight.map((cur) => {
    if (cur.length > 1) {
      return cur.reduce((cur, prev) => {
        return cur + prev;
      });
    } else {
      return cur[0];
    }
  });
};

