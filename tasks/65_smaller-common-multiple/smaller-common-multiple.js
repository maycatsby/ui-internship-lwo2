export function smallestCommons(args) {
  const min = Math.min.apply(null, args);
  const max = Math.max.apply(null, args);
  let targetArr = [];
  for (let i = min; i < max; i++) {
    targetArr.push(i);
  }
  let commonMult = max;
  let flag =false;
  while (!flag) {
    commonMult += max;
    flag = targetArr.reduce((acum, value) =>{
      return acum * (!(commonMult % value));
    }, max);
  }
  return commonMult;
}
