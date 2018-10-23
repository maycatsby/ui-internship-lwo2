export function insert(str, insertable, position) {
  if (typeof(insertable) === 'undefined') insertable = '';
  if (typeof(position) === 'undefined') position = 0;
  return str.slice(0, position) + insertable + str.slice(position);
}
