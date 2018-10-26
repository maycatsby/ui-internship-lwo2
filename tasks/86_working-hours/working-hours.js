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
    return el.day === mon ? mon = el.day.toUpperCase() + ':' + ' ' + el.from + ' ' + '-' + ' ' + el.to
      : el.day === tue ? tue = el.day.toUpperCase() + ':' + ' ' + el.from + ' ' + '-' + ' ' + el.to
      : el.day === wed ? wed = el.day.toUpperCase() + ':' + ' ' + el.from + ' ' + '-' + ' ' + el.to
      : el.day === thu ? thu = el.day.toUpperCase() + ':' + ' ' + el.from + ' ' + '-' + ' ' + el.to
      : el.day === fri ? fri = el.day.toUpperCase() + ':' + ' ' + el.from + ' ' + '-' + ' ' + el.to
      : el.day === sat ? sat = el.day.toUpperCase() + ':' + ' ' + el.from + ' ' + '-' + ' ' + el.to
      : sun = el.day.toUpperCase() + ':' + ' ' + el.from + ' ' + '-' + ' ' + el.to;
  });
  hours.push(mon, tue, wed, thu, fri, sat, sun);
  let formated = hours.reduce(function(acc, next) {
    if (!acc.length) {
      acc[0] = hours[0];
    }
    let time1 = acc[acc.length - 1].match(/\d\d:\d\d - \d\d:\d\d/g);
    let time2 = next.match(/\d\d:\d\d - \d\d:\d\d/g);
    if (JSON.stringify(time1) === JSON.stringify(time2) && JSON.stringify(acc[acc.length - 1] !== JSON.stringify(next))) {
      acc[acc.length -1] = acc[acc.length - 1].slice(0, 3) + ' ' + '-' + ' ' + next;
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
      timeTable += el.slice(6) + '\n';
    } else {
      timeTable += el + ',' + '\n';
    }
  });
  return [timeTable.replace(/.$/, '')];
}
