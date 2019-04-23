const arr = [
  {firstName: 'Kristian',
    lastName: 'Vos',
    likes: 'ride by bicycle',
    number: 565678868},
  {
    firstName: 'Sherlock',
    lastName: 'Sparks',
    likes: ['Intriguing Cases', 'Violin'],
    number: 56789657},
  {
    firstName: 'Harry',
    lastName: 'Marley',
    likes: ['a', 'b'],
    number: 765767989},
  {
    firstName: 'Akira',
    lastName: 'Fox',
    likes: 'computers',
    number: 765767956},

];


export const lookupProfile = (firstName, prop) => {
  let message = 'No such contact';
  for (let i=0; i<arr.length; i++) {
    if (arr[i].firstName === firstName && arr[i][prop]) {
      return message = arr[i][prop];
    } else if (arr[i].firstName === firstName) {
      return message = 'No such property';
    }
  }
  return message;
};
