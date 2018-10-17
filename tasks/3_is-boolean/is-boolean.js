export function isBoolean(value) {
    if (value === true || value === false) return true; 
    else if (typeof(value) === new Boolean(true) || typeof(value) === new Boolean(false)) return true;
  else return false;
}
