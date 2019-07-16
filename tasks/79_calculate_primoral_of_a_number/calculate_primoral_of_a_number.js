export const numPrimorial = (num) => {
  let primorial = 1;
  let count = 0;
  for (let j = 2; count < num; j++) {
    let prime = true;
    for (let i = 2; i <= parseInt(Math.sqrt(j)) && prime; i++) {
      if (j % i === 0) {
        prime = false;
      }
    }
    if (prime) {
      primorial *= j;
      count++;
    }
  }
  return primorial;
};

