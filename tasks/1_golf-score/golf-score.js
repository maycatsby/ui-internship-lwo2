export const GOLF_SCORES = {
  HOLE_IN_ONE: 'Hole-in-one!',
  EAGLE: 'Eagle',
  BIRDIE: 'Birdie',
  PAR: 'Par',
  BOGEY: 'Bogey',
  DOUBLE_BOGEY: 'Double Bogey',
  GO_HOME: 'Go Home!',
};

export const golfScore = (par, stroke) => {
  if (stroke === 1) {
    return GOLF_SCORES.HOLE_IN_ONE;
  } else if (par - stroke <= -3) {
    return GOLF_SCORES.GO_HOME;
  }
  switch (par - stroke) {
    case 1:
      return GOLF_SCORES.BIRDIE;
    case 0:
      return GOLF_SCORES.PAR;
    case -1:
      return GOLF_SCORES.BOGEY;
    case -2:
      return GOLF_SCORES.DOUBLE_BOGEY;
    default:
      return GOLF_SCORES.EAGLE;
  }
};
