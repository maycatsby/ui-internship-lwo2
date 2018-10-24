export function stringExpansion(str) {
  let strArr = str.split('').map((el) => {
    let num = Number(el);
    return num === 0 ? num : num || el;
  });
  const newArr =[];
  if (typeof strArr[0] === 'string') {
    return str;
  }
  for (let i = 0; i < strArr.length; i++) {
    if (typeof strArr[i+1] ==='string') {
      newArr.push(strArr[i+1].repeat(strArr[i]));
      let del= strArr.shift(strArr[i+1]);
      console.log(strArr);
      console.log(del);
      console.log(strArr.length);
    } else if (typeof strArr[i-1] === 'number') {
      newArr.push(strArr[i].repeat(strArr[0]));
    }
  }
  return newArr.join('');
}
