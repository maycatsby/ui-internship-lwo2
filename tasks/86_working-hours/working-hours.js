/* eslint max-len: [ "error", { "code" : 130 }] */
export function formatWorkingHours(input) {
  if (!input.length) {
    return [];
  }
  let mon = 'mon';
  let tue = 'tue';
  let wed = 'wed';
  let thu = 'thu';
  let fri = 'fri';
  let sat = 'sat';
  let sun = 'sun';
  const hours = [];
  input.forEach(function(el) {
    const upper = el.day.toUpperCase();
    const from = el.from;
    const to = el.to;
    return el.day === mon ? mon = upper + ':' + ' ' + from + ' ' + '-' + ' ' + to
      : el.day === tue ? tue = upper + ':' + ' ' + from + ' ' + '-' + ' ' + to
      : el.day === wed ? wed = upper + ':' + ' ' + from + ' ' + '-' + ' ' + to
      : el.day === thu ? thu = upper + ':' + ' ' + from + ' ' + '-' + ' ' + to
      : el.day === fri ? fri = upper + ':' + ' ' + from + ' ' + '-' + ' ' + to
      : el.day === sat ? sat = upper + ':' + ' ' + from + ' ' + '-' + ' ' + to
      : sun = upper + ':' + ' ' + from + ' ' + '-' + ' ' + to;
  });
  hours.push(mon, tue, wed, thu, fri, sat, sun);
  let formated = hours.reduce(function(acc, next) {
    if (!acc.length) {
      acc[0] = hours[0];
    }
    let time1 = acc[acc.length - 1].match(/\d\d:\d\d - \d\d:\d\d/g);
    let time2 = next.match(/\d\d:\d\d - \d\d:\d\d/g);
    if (JSON.stringify(time1) === JSON.stringify(time2)
    && JSON.stringify(acc[acc.length - 1] !== JSON.stringify(next))) {
      acc[acc.length -1] = acc[acc.length - 1]
          .slice(0, 3) + ' ' + '-' + ' ' + next;
    } else {
      acc.push(next);
    }
    return acc;
  }, []);
  let timeTable = '';
  let rest = [];
  formated.forEach(function(el) {
    const elleng = el.length;
    if (elleng === 3 || elleng === 9) {
      rest.push(el);
    } else if (el.slice(0, 3) === el.slice(6, 9)) {
      timeTable = el.slice(6);
      rest.push(timeTable);
    } else {
      timeTable = el;
      rest.push(timeTable);
    }
  });
  return rest;
}
