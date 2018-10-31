export function unpackArray(...args) {
  const targetArr = args.slice();
  const resultArr = [];
  let pushValue;
  targetArr.map((element) => {
    pushValue = Array.isArray(element) ? getInnerArray(element) : element;
    resultArr.push(pushValue);
  });
  function getInnerArray(arr) {
    return arr.reduce((accum, value) => {
      if (!Array.isArray(value)) return accum.concat(value);
      else {
        return accum.concat(getInnerArray(value));
      }
    }, []);
  }
  return resultArr[0];
}
