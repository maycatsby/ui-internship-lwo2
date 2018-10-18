/* eslint "require-jsdoc": 0 */
/* eslint max-len: [2, 120, 4]*/

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


export function lookupProfile(firstName, prop) {
  let contact = false;
  for (let i in contacts) {
    if (contacts[i].firstName === firstName) {
      contact = true;
      if (contacts[i].hasOwnProperty(prop)) {
        return contacts[i][prop];
      } else return 'No such property';
    }
  }
  if (!contact) {
    return 'No such contact';
  }
}
