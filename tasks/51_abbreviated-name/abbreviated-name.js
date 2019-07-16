export const abbreviated = (name) => {
  let arr = name.split(' ');
  let newArray = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    let short = `${arr[i].substring(0, 1)}.`;
    newArray.push(short);
  }

  return newArray.join(' ');
};
