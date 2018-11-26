export function findFriend(input) {
  const leng = input.length;
  let counter = 0;
  for (let i=0; i<leng; i++) {
    if (input[i]==='red' && input[i+1]==='blue' && input[i+2]==='blue') {
      counter++;
    } else if (input[i]==='blue' && input[i+1]==='blue' && input[i+2]==='red') {
      counter++;
    }
  }
  return counter;
}
