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
    if (typeof strArr[i-1] ==='number') {
      newArr.push(strArr[i].repeat(strArr[i-1]));
    } else if (typeof strArr[i-1]!== 'number') {
      strArr.shift(strArr[i-1]);
    }
    //   let del= strArr.shift(strArr[i+1]);
    //   console.log(strArr);
    //   console.log(del);
    //   console.log(strArr.length);
    // } else if (typeof strArr[i-1] === 'number') {
    //   newArr.push(strArr[i].repeat(strArr[0]));
    // }
  } 
  while(typeof strArr[i-1]!=== 'number') {

  }
  return newArr.join('');
}
