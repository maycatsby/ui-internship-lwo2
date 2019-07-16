let collection = {
  '2548': {
    'album': 'Slippery When Wet',
    'artist': 'Bon Jovi',
    'tracks': [
      'Let It Rock',
      'You Give Love a Bad Name',
    ],
  },
  '2468': {
    'album': '1999',
    'artist': 'Prince',
    'tracks': [
      '1999',
      'Little Red Corvette',
    ],
  },
  '1245': {
    'artist': 'Robert Palmer',
    'tracks': [],
  },
  '5439': {
    'album': 'ABBA Gold',
  },
};
export const updateRecords = (id, prop, value) => {
  if (value === '') {
    delete collection[id][prop];
    return collection;
  }
  let propIsTrack = prop === 'tracks';
  let trackContent = collection[id].tracks;

  if (propIsTrack) {
    if (trackContent) {
      collection[id].tracks.push(value);
    } else {
      collection[id].tracks = [value];
    }
  } else {
    collection[id][prop] = value;
  }

  return collection;
};
