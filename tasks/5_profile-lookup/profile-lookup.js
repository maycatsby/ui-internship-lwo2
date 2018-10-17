export const contacts = [
  {
    'firstName': 'Akira',
    'lastName': 'Laine',
    'number': '0543236543',
    'likes': ['Pizza', 'Coding', 'Brownie Points'],
  },
  {
    'firstName': 'Harry',
    'lastName': 'Potter',
    'number': '0994372684',
    'likes': ['Hogwarts', 'Magic', 'Hagrid'],
  },
  {
    'firstName': 'Sherlock',
    'lastName': 'Holmes',
    'number': '0487345643',
    'likes': ['Intriguing Cases', 'Violin'],
  },
  {
    'firstName': 'Kristian',
    'lastName': 'Vos',
    'number': 'unknown',
    'likes': ['Javascript', 'Gaming', 'Foxes'],
  },
];
export const lookupProfile = function(fName, prop) {
  let contactExists = false;
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName == fName) {
      contactExists = true;
      if (contacts[i].hasOwnProperty(prop)) {
        return contacts[i][prop];
      } else return 'No such property';
    }
  }
  if (!contactExists) return 'No such contact';
  return 'lul';
};
