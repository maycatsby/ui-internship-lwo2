const nextInLine = (array, value) => {
  array.push(value);
  array.shift();
  console.log(array);
};

console.log(nextInLine([], 2));